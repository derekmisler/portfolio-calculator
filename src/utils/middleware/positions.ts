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
import { calculateTotals } from 'utils/createData'

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
    const positionId = uuid()
    const share = { ...payload, positionId }
    yield call(rsf.database.update, `users/${uid}/positions/${positionId}`, share)
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
    yield call(rsf.database.patch, `users/${uid}/positions/${payload.positionId}`, share)
    yield put({ type: UPDATE_POSITION.SUCCESS, payload: { share } })
  } catch ({ message }) {
    yield put({ type: UPDATE_POSITION.FAILURE, payload: { error: message } })
  }
}

function* deletePosition(action: PositionsActionsTypes) {
  try {
    const { payload } = action
    const { uid } = yield select(userSelector)
    yield call(rsf.database.delete, `users/${uid}/positions/${payload.positionId}`)
    yield put({ type: DELETE_POSITION.SUCCESS, payload })
  } catch ({ message }) {
    yield put({ type: DELETE_POSITION.FAILURE, payload: { error: message } })
  }
}

function* updateTotals() {
  const { uid } = yield select(userSelector)
  const currentTotals = yield select(totalsSelector)
  const currentShares = yield select(sharesSelector)
  const { totals, shares } = calculateTotals(currentTotals, currentShares)
  yield call(rsf.database.update, `users/${uid}/totals`, totals)
  const payload = { totals, shares }
  yield put({ type: UPDATE_TOTALS, payload })
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
