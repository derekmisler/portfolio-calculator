import React, { memo, SFC } from 'react'
import { Tbody, Tr, Td } from 'molecules/Tables'
import { ShareTypes } from 'utils/reducers/positions'
import { Button } from 'atoms/Buttons'
import { Row } from './Row'

interface BodyProps {
  shares: ShareTypes[]
  isFetchingPositions?: boolean
  addPosition: () => {}
}

export const Body: SFC<BodyProps> = memo(({ shares, isFetchingPositions, addPosition }) => (
  <Tbody>
    {shares.map(s => (
      <Row key={s.id} share={s} />
    ))}
    <Tr>
      <Td colSpan={7}>
        <Button onClick={addPosition} isLoading={isFetchingPositions}>
          Add Position
        </Button>
      </Td>
    </Tr>
  </Tbody>
))
