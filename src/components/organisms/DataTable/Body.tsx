import React, { SFC, memo } from 'react'
import { useDispatch } from 'react-redux'
import { Tr, Td, Tbody } from 'molecules/Tables'
import { Button } from 'atoms/Buttons'
import { ShareTypes } from 'utils/reducers/positions'
import { formatCurrency, formatPercentage } from 'utils/format'
import { createData } from 'utils/createData'
import { addPosition } from 'utils/actions/positions'

interface BodyProps {
  shares: ShareTypes[]
}

export const Body: SFC<BodyProps> = memo(({ shares }) => {
  const hasPositions = !!shares && shares.length > 0
  if (hasPositions) {
    return (
      <Tbody>
        {shares.map((s: ShareTypes) => (
          <Tr key={s.positionId} id={s.positionId}>
            <Td>{s.abbr}</Td>
            <Td textAlign='right'>{s.numShares}</Td>
            <Td textAlign='right'>{formatCurrency(s.price)}</Td>
            <Td textAlign='right'>{formatCurrency(s.total)}</Td>
            <Td textAlign='right'>{formatPercentage(s.expectedPercentage)}</Td>
            <Td textAlign='right'>{formatPercentage(s.realPercentage)}</Td>
            <Td textAlign='right'>{s.buy}%</Td>
          </Tr>
        ))}
      </Tbody>
    )
  }
  const dispatch = useDispatch()
  const positionValues = createData('---', 1, 0, 0)
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
