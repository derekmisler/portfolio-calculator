import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { userReducer } from './user'

export interface RootState {
  user: any
  auth: any
}

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer
})
