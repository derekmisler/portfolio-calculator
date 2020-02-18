import React, { SFC, memo } from 'react'
import { useDispatch } from 'react-redux'
import { Tr, Td, Tbody } from 'molecules/Tables'
import { Button } from 'atoms/Buttons'
import { PostionTypes } from 'utils/reducers/positions'
import { formatCurrency, formatPercentage } from 'utils/format'
import { createData } from 'utils/createData'
import { addPosition } from 'utils/actions/positions'

interface BodyProps {
  positions: PostionTypes[]
}

export const Body: SFC<BodyProps> = memo(({ positions }) => {
  const hasPositions = !!positions && positions.length > 0
  if (hasPositions) {
    return (
      <Tbody>
        {positions.map((p: PostionTypes) => (
          <Tr key={p.id}>
            <Td>{p.id}</Td>
            <Td textAlign='right'>{p.numShares}</Td>
            <Td textAlign='right'>{formatCurrency(p.price)}</Td>
            <Td textAlign='right'>{formatCurrency(p.total)}</Td>
            <Td textAlign='right'>{formatPercentage(p.expectedPercentage)}</Td>
            <Td textAlign='right'>{formatPercentage(p.realPercentage)}</Td>
            <Td textAlign='right'>{p.buy}%</Td>
          </Tr>
        ))}
      </Tbody>
    )
  }
  const dispatch = useDispatch()
  const positionValues = createData('', 1, 0, 0)
  const handleClick = () => {
    dispatch(addPosition(positionValues))
  }
  return (
    <Tbody>
      <Tr>
        <Td colSpan={7}>
          <Button onClick={handleClick}>Add Position</Button>
        </Td>
      </Tr>
    </Tbody>
  )
})
