import { keymirror } from 'utils/keymirror'

export const SIGN_IN = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: '',
}, 'SIGN_IN')
export const SIGN_OUT = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: '',
}, 'SIGN_OUT')

interface SignInAction {
  type: typeof SIGN_IN.REQUEST | typeof SIGN_IN.SUCCESS | typeof SIGN_IN.FAILURE
  payload?: any
}
interface SignOutAction {
  type: typeof SIGN_IN.REQUEST | typeof SIGN_IN.SUCCESS | typeof SIGN_IN.FAILURE
  payload?: any
}
export type AuthActionTypes = SignInAction | SignOutAction


export const signIn = (email: string, password: string) => ({
  type: SIGN_IN.REQUEST,
  payload: {
    email,
    password
  }
})


export const signOut = () => ({
  type: SIGN_OUT.REQUEST
})

