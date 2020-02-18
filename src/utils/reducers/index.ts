import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'
import { authReducer } from './auth'
import { positionsReducer } from './positions'

export interface RootState extends Map<any, any> {
  user: any
  positions: any
}

export default combineReducers({
  auth: authReducer,
  positions: positionsReducer
})
