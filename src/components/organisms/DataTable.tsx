import React from 'react'
import { useSelector } from 'react-redux'
import { Heading } from 'atoms/Typography'
import { PostionTypes } from 'utils/reducers/positions'
import { TableContainer, Table, Tr, Td, Th, Tbody, Thead, Tfoot } from 'molecules/Tables'
import { positionsSelector } from 'utils/selectors'
import { formatCurrency, formatPercentage } from 'utils/format'
import { POSITION_HEADINGS } from 'constants/positionHeadings'

export const DataTable = () => {
  const { positions, totals } = useSelector(positionsSelector)

  return (
    <TableContainer width={[null, 1 / 2]} mx={[2, 'auto']}>
      <Table>
        <Thead>
          <Tr>
            {POSITION_HEADINGS.map(h => (
              <Th key={h.key} textAlign='right'>
                <Heading level={4}>{h.label}</Heading>
              </Th>
            ))}
          </Tr>
        </Thead>
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
        <Tfoot>
          <Tr>
            <Td colSpan={2}>{formatCurrency(totals.totalCash)}</Td>
            <Td textAlign='right'>{formatCurrency(totals.totalPostionValue)}</Td>
            <Td textAlign='right'>{formatCurrency(totals.totalPostionValue)}</Td>
            <Td textAlign='right'>{formatPercentage(totals.totalPercentage)}</Td>
            <Td textAlign='right'>{formatCurrency(totals.availableCash)}</Td>
            <Td textAlign='right'>{formatCurrency(totals.costToBuy)}</Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}
