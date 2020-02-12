import { keymirror } from 'utils/keymirror'

export const AUTH = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: '',
})

interface AuthAction {
  type: typeof AUTH
  payload: any
}

export type AuthActionTypes = AuthAction
