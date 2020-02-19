import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects'
import { SIGN_IN, SIGN_OUT, AuthActionTypes } from 'utils/actions/auth'
import rsf from 'utils/configureFirebase'
import { getPositions } from 'utils/actions/positions'

const firebase =
  typeof window !== 'undefined'
    ? require('firebase')
    : {
        auth: {
          GoogleAuthProvider: () => {}
        }
      }

function* signInSaga(action: AuthActionTypes) {
  const {
    payload: { email, password }
  } = action || {}
  try {
    if (email && password) {
      yield call(rsf.auth.signInWithEmailAndPassword, email, password)
    } else {
      const authProvider = new firebase.auth.GoogleAuthProvider()
      yield call(rsf.auth.signInWithPopup, authProvider)
    }
  } catch ({ message }) {
    yield put({ type: SIGN_IN.FAILURE, payload: { error: message } })
  }
}

function* signOutSaga() {
  try {
    yield call(rsf.auth.signOut)
  } catch ({ message }) {
    yield put({ type: SIGN_OUT.FAILURE, payload: { error: message } })
  }
}

function* loginStatusWatcher() {
  const channel = yield call(rsf.auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) {
      yield put({ type: SIGN_IN.SUCCESS, payload: user.toJSON() })
      yield put(getPositions())
    } else {
      yield put({ type: SIGN_OUT.SUCCESS })
    }
  }
}

export default function* authRootSaga() {
  if (typeof window !== 'undefined') {
    yield fork(loginStatusWatcher)
    yield all([takeEvery(SIGN_IN.REQUEST, signInSaga), takeEvery(SIGN_OUT.REQUEST, signOutSaga)])
  }
}
