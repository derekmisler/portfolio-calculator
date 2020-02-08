import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers'
import appMiddleware from './middleware'

const sagaMiddleware = createSagaMiddleware()
const composedMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware))

export const configureStore = () => {
  const store: any = createStore(rootReducer, undefined, composedMiddleware)
  return store
}

appMiddleware()
