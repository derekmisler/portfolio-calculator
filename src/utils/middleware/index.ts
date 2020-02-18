import { all, fork } from 'redux-saga/effects'
import api from './api'
import auth from './auth'
import positions from './positions'

export default function* rootSaga() {
  yield all([
    fork(api),
    fork(auth),
    fork(positions)
  ])
}
