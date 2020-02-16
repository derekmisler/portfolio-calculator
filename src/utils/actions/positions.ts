import { keymirror } from 'utils/keymirror'

export const POSITIONS = keymirror({
  ADD: '',
  UPDATE: '',
  DELETE: '',
}, 'POSITIONS')

export interface PositionsActionsTypes {
  type: typeof POSITIONS.UPDATE | typeof POSITIONS.UPDATE | typeof POSITIONS.DELETE
  payload: any
}

export const addPosition = (position: any) => ({
  type: POSITIONS.ADD,
  payload: { ...position }
})

export const updatePosition = (position: any) => ({
  type: POSITIONS.UPDATE,
  payload: { ...position }
})

export const deletePosition = (id: string) => ({
  type: POSITIONS.DELETE,
  payload: { id }
})
