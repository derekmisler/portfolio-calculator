import { call, put, take } from 'redux-saga/effects'
import firebase from 'firebase'
import { SIGN_IN } from 'utils/actions/auth'

export function* auth() {
  const action = yield take('*')
  console.log('----------')
  console.log('action', action)
  console.log('^^^^^^^^^^')
  const { payload = {} } = action
  if (payload.auth) {
    const [requestType, successType, failureType] = payload.actionTypes
    yield put({ type: requestType })
    
    const isSigningIn = requestType === SIGN_IN.REQUEST

    try {
      let response = {}
      if (isSigningIn) {
        const { email, password } = payload
        response = yield call(firebase.auth().signInWithEmailAndPassword, email, password)
      } else {
        yield call(firebase.auth().signOut)
      }
      yield put({ type: successType, payload: response })
    }
    catch({ message }) {
      yield put({ type: failureType, payload: message })
    }
  }
}
