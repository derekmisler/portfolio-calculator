import { all, call, select, takeEvery, put } from 'redux-saga/effects'
import uuid from 'uuid/v4'
import rsf from 'utils/configureFirebase'
import { GET_POSITIONS, ADD_POSITION, UPDATE_POSITION, DELETE_POSITION, PositionsActionsTypes } from 'utils/actions/positions'
import { userSelector } from 'utils/selectors'

// database.read(pathOrRef)
// database.create(pathOrRef, data)
// database.update(pathOrRef, data)
// database.patch(pathOrRef, data)
// database.delete(pathOrRef)
// database.channel(pathOrRef, event, buffer)
// database.sync(pathOrRef, options, event)

function* getPositions() {
  try {
    const { uid } = yield select(userSelector)
    const positions = yield call(rsf.database.read, `users/${uid}/positions`)
    yield put({ type: GET_POSITIONS.SUCCESS, payload: positions.toJSON() })
  } catch ({ message }) {
    yield put({ type: GET_POSITIONS.FAILURE, payload: { error: message } })
  }
}

function* addPosition(action: PositionsActionsTypes) {
  try {
    const { payload } = action
    const positionId = uuid()
    const { uid } = yield select(userSelector)
    const updatedPayload = { ...payload, positionId }
    yield call(rsf.database.update, `users/${uid}/positions/${positionId}`, updatedPayload)
    yield put({ type: ADD_POSITION.SUCCESS, payload: updatedPayload })
  } catch ({ message }) {
    yield put({ type: ADD_POSITION.FAILURE, payload: { error: message } })
  }
}

function* updatePosition(action: PositionsActionsTypes) {
  try {
    const { payload } = action
    const { uid } = yield select(userSelector)
    yield call(rsf.database.patch, `users/${uid}/positions/${payload.positionId}`, payload)
    yield put({ type: UPDATE_POSITION.SUCCESS, payload })
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

export default function* positionsRootSaga() {
  if (typeof window !== 'undefined') {
    yield all([
      takeEvery(GET_POSITIONS.REQUEST, getPositions),
      takeEvery(ADD_POSITION.REQUEST, addPosition),
      takeEvery(UPDATE_POSITION.REQUEST, updatePosition),
      takeEvery(DELETE_POSITION.REQUEST, deletePosition)
    ])
  }
}
