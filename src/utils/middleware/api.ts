import { call, put } from 'redux-saga/effects'
import { callApi } from 'utils/callApi'

export function* api(action: { type: string, payload?: any }) {
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
