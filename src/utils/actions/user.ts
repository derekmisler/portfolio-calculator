export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAILED = 'USER_DETAILS_FAILED'

interface UserAction {
  type: typeof USER_DETAILS_SUCCESS
  payload: any
}

export type UserActionTypes = UserAction
