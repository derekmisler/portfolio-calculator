import { createActions } from 'utils/createActions'
import { SharesTypes, TotalsTypes } from 'utils/reducers/positions'

export const GET_POSITIONS = createActions('GET_POSITIONS')
export const UPDATE_TOTALS = createActions('UPDATE_TOTALS')
export const ADD_POSITION = 'ADD_POSITION'
export const UPDATE_POSITION = 'UPDATE_POSITION'
export const DELETE_POSITION = 'DELETE_POSITION'

type GetPositionsActions =
  | typeof GET_POSITIONS.REQUEST
  | typeof GET_POSITIONS.SUCCESS
  | typeof GET_POSITIONS.FAILURE

type UpdateTotalsActions =
  | typeof UPDATE_TOTALS.REQUEST
  | typeof UPDATE_TOTALS.SUCCESS
  | typeof UPDATE_TOTALS.FAILURE

type AddPositionActions = typeof ADD_POSITION
type UpdatePositionActions = typeof UPDATE_POSITION
type DeletePositionActions = typeof DELETE_POSITION

export interface PositionsActionsTypes {
  type:
    | GetPositionsActions
    | AddPositionActions
    | UpdatePositionActions
    | DeletePositionActions
    | UpdateTotalsActions
  payload: any | { total: TotalsTypes, shares: SharesTypes }
}

export const getPositions = () => ({
  type: GET_POSITIONS.REQUEST
})

export const addPosition = (position: any) => ({
  type: ADD_POSITION,
  payload: { ...position }
})

export const updatePosition = (position: any) => ({
  type: UPDATE_POSITION,
  payload: { ...position }
})

export const deletePosition = (id: string) => ({
  type: DELETE_POSITION,
  payload: { id }
})

export const updateTotals = (totals: any) => ({
  type: UPDATE_TOTALS.REQUEST,
  payload: { totals }
})
