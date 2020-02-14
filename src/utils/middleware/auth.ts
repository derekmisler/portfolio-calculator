import firebase from 'firebase'
import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects'

import { SIGN_IN, SIGN_OUT } from 'utils/actions/auth'
import { updateUserData } from 'utils/actions/user'

import rsf from 'utils/configureFirebase'

const authProvider = new firebase.auth.GoogleAuthProvider()

function* signInSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider)
  } catch (error) {
    yield put({ type: SIGN_IN.FAILURE, payload: error })
  }
}

function* signOutSaga() {
  try {
    yield call(rsf.auth.signOut)
  } catch (error) {
    yield put({ type: SIGN_OUT.FAILURE, payload: error })
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
