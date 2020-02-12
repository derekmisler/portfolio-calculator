import { keymirror } from 'utils/keymirror'

export const SIGN_IN = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: '',
})
export const SIGN_OUT = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: '',
})

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
  payload: {
    auth: true,
    email,
    password,
    actionTypes: Object.keys(SIGN_IN)
  }
})


export const signOut = () => ({
  payload: {
    auth: true,
    actionTypes: Object.keys(SIGN_OUT)
  }
})

