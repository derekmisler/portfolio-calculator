import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import appMiddleware from './middleware'

const sagaMiddleware = createSagaMiddleware()
const composedMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware))

const configureStore = () => {
  const store: any = createStore(rootReducer, composedMiddleware)
  sagaMiddleware.run(appMiddleware)
  return store
}

export default configureStore