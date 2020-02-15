import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'
import { userReducer } from './user'
import { authReducer } from './auth'

export interface RootState extends Map<any, any> {
  user: any
  auth: any
}

export default combineReducers({
  user: userReducer,
  auth: authReducer
})
