import { combineReducers } from 'redux'
import { userReducer } from './user'

export interface RootState {
  user: any
}

export const rootReducer = combineReducers({
  user: userReducer,
})
