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
  calculateavailableCash,
  calculateShareValues
} from 'utils/calculateValues'
import { userSelector, sharesSelector, totalsSelector } from 'utils/selectors'

function* getPositions() {
  const { uid } = yield select(userSelector)
  try {
    const { shares, totals } = yield call(rsf.database.read, `users/${uid}`)
    console.log('----------')
    console.log('{shares, totals}', {shares, totals})
    console.log('^^^^^^^^^^')
    const positions = {
      shares: (shares || []).filter(Boolean),
      totals
    }
    yield put({ type: GET_POSITIONS.SUCCESS, payload: positions })
  } catch ({ message }) {
    yield put({ type: GET_POSITIONS.FAILURE, payload: { error: message } })
  }
}

function* addPosition(action: PositionsActionsTypes) {
  const { payload } = action
  const share = createData(payload)
  const shares = yield select(sharesSelector)
  shares.push(share)
  console.log('----------')
  console.log('addPosition shares', shares)
  console.log('^^^^^^^^^^')
  yield put({ type: UPDATE_TOTALS.REQUEST, payload: { shares } })
}

function* updatePosition(action: PositionsActionsTypes) {
  const { payload } = action
  const share = { ...payload }
  const shares = yield select(sharesSelector)
  const indexToUpdate = shares.findIndex(({ id }: { id: string }) => id === share.id)
  shares[indexToUpdate] = share
  yield put({ type: UPDATE_TOTALS.REQUEST, payload: { shares } })
}


function* deletePosition(action: PositionsActionsTypes) {
  const { payload: share } = action
  const shares = yield select(sharesSelector)
  const updatedShares = shares.filter(({ id }: { id: string }) => id !== share.id)
  yield put({ type: UPDATE_TOTALS.REQUEST, payload: { shares: updatedShares } })
}

function* updateTotals(action: PositionsActionsTypes) {
  try {
    const { payload: { totals = {}, shares = [] } = {} } = action
    const currentTotals = yield select(totalsSelector)
    const updatedTotals = { ...currentTotals, ...totals }
    const { totalPositionValue, totalPercentage } = calculateTotals(shares)
    const availableCash = calculateavailableCash(totalPositionValue, updatedTotals.totalCash)
    const newShares = calculateShareValues(shares, totalPositionValue)

    const newTotals = { ...updatedTotals, totalPositionValue, totalPercentage, availableCash }

    const { uid } = yield select(userSelector)
    yield call(rsf.database.update, `users/${uid}/shares`, newShares)
    yield call(rsf.database.update, `users/${uid}/totals`, newTotals)
    yield put({ type: UPDATE_TOTALS.SUCCESS, payload: { totals: newTotals, shares: newShares } })
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
