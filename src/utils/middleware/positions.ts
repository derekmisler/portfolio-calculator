import { all, call, select, takeEvery, put } from 'redux-saga/effects'
import rsf from 'utils/configureFirebase'
import {
  UPDATE_TOTALS,
  GET_POSITIONS,
  ADD_POSITION,
  UPDATE_POSITION,
  DELETE_POSITION,
  PositionsActionsTypes
} from 'utils/actions/positions'
import {
  createData,
  calculateTotals,
  calculateCashRemaining,
  calculateShareValues
} from 'utils/calculateValues'
import { userSelector } from 'utils/selectors'

// case ADD_POSITION.SUCCESS:
//   return state
//     .setIn(['isFetchingPositions'], false)
//     .deleteIn(['positionsError'])
//     .setIn(['shares', payload.id], payload)
// case UPDATE_POSITION.SUCCESS:
//   return state
//     .setIn(['isFetchingPositions'], false)
//     .deleteIn(['positionsError'])
//     .mergeDeepIn(['shares', payload.id], payload)
// case DELETE_POSITION.SUCCESS:
//   return state
//     .setIn(['isFetchingPositions'], false)
//     .deleteIn(['positionsError'])
//     .deleteIn(['shares', payload.id])

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
  const { payload } = action
  const share = createData(payload)
  const shares = yield select(state => state.getIn(['positions', 'shares']))
  const updatedShares = shares.setIn([share.id], share)
  yield put({ type: UPDATE_TOTALS.REQUEST, payload: { shares: updatedShares } })
}

function* updatePosition(action: PositionsActionsTypes) {
  const { payload } = action
  const share = { ...payload }
  yield put({ type: UPDATE_TOTALS.REQUEST, payload: { share } })
}

function* deletePosition(action: PositionsActionsTypes) {
  const { payload: share } = action
  yield put({ type: UPDATE_TOTALS.REQUEST, payload: { share } })
}

function* updateTotals(action: PositionsActionsTypes) {
  try {
    const { payload: { totals = {}, shares = {} } = {} } = action
    const { totalPositionValue, totalPercentage } = calculateTotals(shares)
    const cashRemaining = calculateCashRemaining(totalPositionValue, totals.cash)
    const { total, realPercentage } = calculateShareValues(shares, totalPositionValue)

    const newShares = { ...shares, total, realPercentage }
    const newTotals = { ...totals, totalPositionValue, totalPercentage, cashRemaining }

    const { uid } = yield select(userSelector)
    yield call(rsf.database.update, `users/${uid}/positions`, newShares)
    yield call(rsf.database.update, `users/${uid}/totals`, newTotals)
    yield put({ type: UPDATE_TOTALS.SUCCESS, payload: { totals: newTotals, newShares } })
  } catch ({ message }) {
    yield put({ type: UPDATE_TOTALS.FAILURE, payload: { error: message } })
  }
}

export default function* positionsRootSaga() {
  if (typeof window !== 'undefined') {
    yield all([
      takeEvery(GET_POSITIONS.REQUEST, getPositions),
      takeEvery(UPDATE_TOTALS.REQUEST, updateTotals),
      takeEvery(ADD_POSITION, addPosition),
      takeEvery(UPDATE_POSITION, updatePosition),
      takeEvery(DELETE_POSITION, deletePosition)
    ])
  }
}
