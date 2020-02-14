import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects'

import { SIGN_IN, SIGN_OUT, AuthActionTypes } from 'utils/actions/auth'
import { updateUserData } from 'utils/actions/user'

import rsf from 'utils/configureFirebase'

const firebase = typeof window !== 'undefined' ? require('firebase') : {
  auth: {
    GoogleAuthProvider: () => {}
  }
}

function* signInSaga(action: AuthActionTypes) {
  const { payload: { email, password } } = action || {}
  try {
    if (email && password) {
      yield call(rsf.auth.signInWithEmailAndPassword, email, password)
    } else {
      const authProvider = new firebase.auth.GoogleAuthProvider()
      yield call(rsf.auth.signInWithPopup, authProvider)
    }
    yield put({ type: SIGN_IN.SUCCESS })
  } catch ({ message }) {
    yield put({ type: SIGN_IN.FAILURE, payload: { error: message } })
  }
}

function* signOutSaga() {
  try {
    yield call(rsf.auth.signOut)
    yield put({ type: SIGN_OUT.SUCCESS })
  } catch ({ message }) {
    yield put({ type: SIGN_OUT.FAILURE, payload: { error: message } })
  }
}

function* loginStatusWatcher() {
  const channel = yield call(rsf.auth.channel)

  while (true) {
    const { user } = yield take(channel)

    yield put(updateUserData(user))

    if (user) yield put({ type: SIGN_IN.SUCCESS })
    else yield put({ type: SIGN_OUT.SUCCESS })
  }
}

export default function* loginRootSaga() {
  yield fork(loginStatusWatcher)
  yield all([takeEvery(SIGN_IN.REQUEST, signInSaga), takeEvery(SIGN_OUT.REQUEST, signOutSaga)])
}
