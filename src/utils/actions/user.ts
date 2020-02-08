export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS'
export const USER_AUTH_FAILED = 'USER_AUTH_FAILED'

interface UserAuthAction {
  type: typeof USER_AUTH_SUCCESS
  payload: any
}

export type UserActionTypes = UserAuthAction