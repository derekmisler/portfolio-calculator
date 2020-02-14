import { all, fork } from 'redux-saga/effects'
import api from './api'
import auth from './auth'

export default function* rootSaga() {
  yield all([
    fork(api),
    fork(auth)
  ])
}
