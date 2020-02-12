import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { userReducer } from './user'

export interface RootState {
  user: any
  auth: any
}

export default combineReducers({
  user: userReducer,
  auth: authReducer
})
