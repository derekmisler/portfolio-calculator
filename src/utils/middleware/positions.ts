import { all, call, select, takeEvery, put, takeLatest } from 'redux-saga/effects'
import uuid from 'uuid/v4'
import rsf from 'utils/configureFirebase'
import {
  UPDATE_TOTALS,
  GET_POSITIONS,
  ADD_POSITION,
  UPDATE_POSITION,
  DELETE_POSITION,
  PositionsActionsTypes
} from 'utils/actions/positions'
import { userSelector, totalsSelector, sharesSelector } from 'utils/selectors'
import { calculateTotalsSelector, calculateSharePercentagesSelector } from 'utils/selectors'

function* getPositions() {
  try {
    const { uid } = yield select(userSelector)
    const shares = yield call(rsf.database.read, `users/${uid}/positions`)
    const totals = yield call(rsf.database.read, `users/${uid}/totals`)
    yield put({ type: GET_POSITIONS.SUCCESS, payload: { shares, totals } })
  } catch ({ message }) {
    yield put({ type: GET_POSITIONS.FAILURE, payload: { error: message } })
  }
}

function* addPosition(action: PositionsActionsTypes) {
  try {
    const { payload } = action
    const { uid } = yield select(userSelector)
    const id = uuid()
    const share = { ...payload, id }
    yield call(rsf.database.update, `users/${uid}/positions/${id}`, share)
    yield put({ type: ADD_POSITION.SUCCESS, payload: share })
  } catch ({ message }) {
    yield put({ type: ADD_POSITION.FAILURE, payload: { error: message } })
  }
}

function* updatePosition(action: PositionsActionsTypes) {
  try {
    const { payload } = action
    const { uid } = yield select(userSelector)
    const share = { ...payload }
    yield call(rsf.database.patch, `users/${uid}/positions/${payload.id}`, share)
    yield put({ type: UPDATE_POSITION.SUCCESS, payload: { share } })
  } catch ({ message }) {
    yield put({ type: UPDATE_POSITION.FAILURE, payload: { error: message } })
  }
}

function* deletePosition(action: PositionsActionsTypes) {
  try {
    const { payload } = action
    const { uid } = yield select(userSelector)
    yield call(rsf.database.delete, `users/${uid}/positions/${payload.id}`)
    yield put({ type: DELETE_POSITION.SUCCESS, payload })
  } catch ({ message }) {
    yield put({ type: DELETE_POSITION.FAILURE, payload: { error: message } })
  }
}

function* updateTotals(action: PositionsActionsTypes) {
  try {
    const { payload: { totals: newTotals = {} } = {} } = action
    const { uid } = yield select(userSelector)
    const currentTotals = yield select(totalsSelector)
    const currentShares = yield select(sharesSelector)
    const totals = calculateTotalsSelector({ ...currentTotals, ...newTotals }, currentShares)
    const shares = calculateSharePercentagesSelector(currentShares, totals.totalPositionValue)

    yield call(rsf.database.update, `users/${uid}/totals`, totals)
    yield put({ type: UPDATE_TOTALS.SUCCESS, payload: { totals, shares } })
  } catch ({ message }) {
    yield put({ type: UPDATE_TOTALS.FAILURE, payload: { error: message } })
  }
}

export default function* positionsRootSaga() {
  if (typeof window !== 'undefined') {
    yield all([
      takeEvery(GET_POSITIONS.REQUEST, getPositions),
      takeEvery(ADD_POSITION.REQUEST, addPosition),
      takeEvery(UPDATE_POSITION.REQUEST, updatePosition),
      takeEvery(DELETE_POSITION.REQUEST, deletePosition),
      takeLatest(
        [
          UPDATE_TOTALS.REQUEST,
          ADD_POSITION.SUCCESS,
          UPDATE_POSITION.SUCCESS,
          DELETE_POSITION.SUCCESS,
          GET_POSITIONS.SUCCESS
        ],
        updateTotals
      )
    ])
  }
}