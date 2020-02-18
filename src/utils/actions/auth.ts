import { createActions } from 'utils/createActions'

export const SIGN_IN = createActions('SIGN_IN')
export const SIGN_OUT = createActions('SIGN_OUT')

type SignInActions =
  | typeof SIGN_IN.REQUEST
  | typeof SIGN_IN.SUCCESS
  | typeof SIGN_IN.FAILURE

type SignOutActions =
  | typeof SIGN_OUT.REQUEST
  | typeof SIGN_OUT.SUCCESS
  | typeof SIGN_OUT.FAILURE

export interface AuthActionTypes {
  type: SignInActions | SignOutActions
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
