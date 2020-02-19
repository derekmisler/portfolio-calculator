import React, { SFC, memo } from 'react'
import { Tr, Td } from 'molecules/Tables'
import { ShareTypes } from 'utils/reducers/positions'
import { formatCurrency, formatPercentage } from 'utils/format'

interface BodyProps {
  share: ShareTypes
}

export const Body: SFC<BodyProps> = memo(({ share: s }) => {
  return (
    <Tr key={s.positionId} id={s.positionId}>
      <Td>{s.abbr}</Td>
      <Td textAlign='right'>{s.numShares}</Td>
      <Td textAlign='right'>{formatCurrency(s.price)}</Td>
      <Td textAlign='right'>{formatCurrency(s.total)}</Td>
      <Td textAlign='right'>{formatPercentage(s.expectedPercentage)}</Td>
      <Td textAlign='right'>{formatPercentage(s.realPercentage)}</Td>
      <Td textAlign='right'>{s.buy || 0}</Td>
    </Tr>
  )
})
