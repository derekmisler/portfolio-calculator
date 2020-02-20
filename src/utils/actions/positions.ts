import { createActions } from 'utils/createActions'

export const GET_POSITIONS = createActions('GET_POSITIONS')
export const ADD_POSITION = createActions('ADD_POSITION')
export const UPDATE_POSITION = createActions('UPDATE_POSITION')
export const DELETE_POSITION = createActions('DELETE_POSITION')
export const UPDATE_TOTALS = createActions('UPDATE_TOTALS')

type GetPositionsActions =
  | typeof GET_POSITIONS.REQUEST
  | typeof GET_POSITIONS.SUCCESS
  | typeof GET_POSITIONS.FAILURE

type AddPositionActions =
  | typeof ADD_POSITION.REQUEST
  | typeof ADD_POSITION.SUCCESS
  | typeof ADD_POSITION.FAILURE

type UpdatePositionActions =
  | typeof UPDATE_POSITION.REQUEST
  | typeof UPDATE_POSITION.SUCCESS
  | typeof UPDATE_POSITION.FAILURE

type DeletePositionActions =
  | typeof DELETE_POSITION.REQUEST
  | typeof DELETE_POSITION.SUCCESS
  | typeof DELETE_POSITION.FAILURE

type UpdateTotalsActions =
  | typeof UPDATE_TOTALS.REQUEST
  | typeof UPDATE_TOTALS.SUCCESS
  | typeof UPDATE_TOTALS.FAILURE

export interface PositionsActionsTypes {
  type: GetPositionsActions | AddPositionActions | UpdatePositionActions | DeletePositionActions | UpdateTotalsActions
  payload: any
}

export const getPositions = () => ({
  type: GET_POSITIONS.REQUEST
})

export const addPosition = (position: any) => ({
  type: ADD_POSITION.REQUEST,
  payload: { ...position }
})

export const updatePosition = (position: any) => ({
  type: UPDATE_POSITION.REQUEST,
  payload: { ...position }
})

export const deletePosition = (id: string) => ({
  type: DELETE_POSITION.REQUEST,
  payload: { id }
})

export const updateTotals = (totals: any) => ({
  type: UPDATE_TOTALS.REQUEST,
  payload: { totals }
})
