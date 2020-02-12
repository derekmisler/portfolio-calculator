import { call, put, take, race } from 'redux-saga/effects'
import firebase from 'firebase'
import { SIGN_IN, SIGN_OUT } from 'utils/actions/auth'

function* signInSaga({ email, password }: { email: string, password: string }) {
  console.log('----------')
  console.log({ email, password })
  console.log('^^^^^^^^^^')

  try {
    const response = yield call(firebase.auth().signInWithEmailAndPassword, email, password)
    console.log('----------')
    console.log('response', response)
    console.log('^^^^^^^^^^')
    yield put({ type: SIGN_IN.SUCCESS, payload: response })
  }
  catch(error) {
    console.log('----------')
    console.log('error:', error)
    console.log('^^^^^^^^^^')
    const payload = error.code === 'auth/wrong-password' ? 'Incorrect password' : error.message
    yield put({ type: SIGN_IN.FAILURE, payload })
  }
}
function* signOutSaga() {
  try {
    yield call(firebase.auth().signOut)
    yield put({ type: SIGN_OUT.SUCCESS })
  }
  catch({ message }) {
    yield put({ type: SIGN_OUT.FAILURE, payload: message })
  }
}

export default function* rootAuth() {
  while (true) {
    const { payload } = yield take(SIGN_IN.REQUEST)
    yield race({
      task: call(signInSaga, payload),
      cancel: take([SIGN_OUT.REQUEST]),
    });
  }
}
