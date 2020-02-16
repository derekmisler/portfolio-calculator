import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'
import { userReducer } from './user'
import { authReducer } from './auth'
import { positionsReducer } from './positions'

export interface RootState extends Map<any, any> {
  user: any
  auth: any
  positions: any
}

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  positions: positionsReducer
})
