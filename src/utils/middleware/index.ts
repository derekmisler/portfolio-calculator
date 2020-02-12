import { all } from 'redux-saga/effects'

import { api } from './api'

export default function* root() {
  yield all([api()])
}
