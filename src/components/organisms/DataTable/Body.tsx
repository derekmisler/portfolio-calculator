import React, { SFC, memo } from 'react'
import { Tr, Td, Tbody } from 'molecules/Tables'
import { PostionTypes } from 'utils/reducers/positions'
import { formatCurrency, formatPercentage } from 'utils/format'

interface BodyProps {
  positions: PostionTypes[]
}

export const Body: SFC<BodyProps> = memo(({ positions }) => (
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
))

