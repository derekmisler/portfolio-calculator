import { call, put, take } from 'redux-saga/effects'
import { callApi } from 'utils/callApi'

function* api() {
  const action = yield take('*')
  const { payload = {} } = action
  if (payload.callApi) {
    const [requestType, successType, failureType] = payload.actionTypes
    yield put({ type: requestType })

    try {
      const { requestData } = payload
      const response = yield call(callApi, requestData)
      yield put({ type: successType, payload: response })
    }
    catch(error) {
      yield put({ type: failureType, payload: error })
    }
  }
}

export default function* rootApi() {
}
