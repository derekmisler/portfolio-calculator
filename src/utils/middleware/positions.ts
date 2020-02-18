import { all, call, select, takeEvery, fork, take, put } from 'redux-saga/effects'
import rsf from 'utils/configureFirebase'
import { POSITIONS, PositionsActionsTypes, syncFirebasePositions } from 'utils/actions/positions'
import { userSelector } from 'utils/selectors'

// database.read(pathOrRef)
// database.create(pathOrRef, data)
// database.update(pathOrRef, data)
// database.patch(pathOrRef, data)
// database.delete(pathOrRef)
// database.channel(pathOrRef, event, buffer)
// database.sync(pathOrRef, options, event)

function* addPosition(action: PositionsActionsTypes) {
  const { uid } = yield select(userSelector)
  yield call(rsf.database.create, `users/${uid}/positions`, { ...action.payload })
}

function* updatePosition(action: PositionsActionsTypes) {
  const { uid } = yield select(userSelector)
  yield call(rsf.database.patch, `users/${uid}/positions/${action.payload.id}`, {
    ...action.payload
  })
}

function* deletePosition(action: PositionsActionsTypes) {
  const { uid } = yield select(userSelector)
  yield call(rsf.database.delete, `users/${uid}/positions/${action.payload.id}`)
}

function* databaseUpdateWatcher() {
  const { uid } = yield select(userSelector)
  const channel = yield call(rsf.database.channel, `users/${uid}/positions`, 'value')

  while (true) {
    const positions = yield take(channel)

    if (positions) {
      yield put(syncFirebasePositions(positions.toJSON()))
    } else {
      yield put({ type: POSITIONS.SYNC_ERROR })
    }
  }
}

export default function* positionsRootSaga() {
  if (typeof window !== 'undefined') {
    yield fork(databaseUpdateWatcher)
    yield all([
      takeEvery(POSITIONS.ADD, addPosition),
      takeEvery(POSITIONS.UPDATE, updatePosition),
      takeEvery(POSITIONS.DELETE, deletePosition)
    ])
  }
}
