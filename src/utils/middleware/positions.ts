import { all, call, select, takeEvery } from 'redux-saga/effects'
import rsf from 'utils/configureFirebase'
import { POSITIONS, PositionsActionsTypes } from 'utils/actions/positions'

// database.read(pathOrRef)
// database.create(pathOrRef, data)
// database.update(pathOrRef, data)
// database.patch(pathOrRef, data)
// database.delete(pathOrRef)
// database.channel(pathOrRef, event, buffer)
// database.sync(pathOrRef, options, event)

function* addPosition(action: PositionsActionsTypes) {
  const user = yield select(state => state.user.uid)

  yield call(rsf.database.create, `${user}/positions`, { ...action.payload })
}

function* updatePosition(action: PositionsActionsTypes) {
  const user = yield select(state => state.user.uid)
  yield call(rsf.database.patch, `${user}/positions/${action.payload.id}`, { ...action.payload })
}

function* deletePosition(action: PositionsActionsTypes) {
  const user = yield select(state => state.user.uid)
  yield call(rsf.database.delete, `${user}/positions/${action.payload.id}`)
}

export default function* rootSaga() {
  yield all([
    takeEvery(POSITIONS.ADD, addPosition),
    takeEvery(POSITIONS.UPDATE, updatePosition),
    takeEvery(POSITIONS.DELETE, deletePosition)
  ])
}
