import { keymirror } from 'utils/keymirror'

export const SIGN_IN = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: ''
}, 'SIGN_IN')

export const SIGN_OUT = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: ''
}, 'SIGN_OUT')

export interface AuthActionTypes {
  type: typeof SIGN_IN.REQUEST | typeof SIGN_OUT.REQUEST,
  payload: { email?: string, password?: string, error?: string }
}

export const signIn = (email?: string, password?: string) => ({
  type: SIGN_IN.REQUEST,
  payload: {
    email,
    password
  }
})

export const signOut = () => ({
  type: SIGN_OUT.REQUEST,
  payload: {}
})
