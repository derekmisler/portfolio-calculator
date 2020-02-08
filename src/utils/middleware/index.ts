import { all } from 'redux-saga/effects'

import { helloSaga } from './hello'

export default function* root() {
  yield all([helloSaga()])
}
