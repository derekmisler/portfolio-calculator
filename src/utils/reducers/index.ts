import { combineReducers } from 'redux'
import { userReducer } from './user'
import { authReducer } from './auth'

export interface RootState {
  user: any
  auth: any
}

export default combineReducers({
  user: userReducer,
  auth: authReducer
})
