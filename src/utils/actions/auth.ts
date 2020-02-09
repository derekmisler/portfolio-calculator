export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILED = 'AUTH_FAILED'

interface AuthAction {
  type: typeof AUTH_SUCCESS
  payload: any
}

export type AuthActionTypes = AuthAction
