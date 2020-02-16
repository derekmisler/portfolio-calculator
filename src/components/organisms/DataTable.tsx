import React from 'react'
import { useSelector } from 'react-redux'
import { Heading, Text } from 'atoms/Typography'
import { PostionTypes } from 'utils/reducers/positions'
import { TableContainer, Table, Tr, Td, Th, Tbody, Thead, Tfoot } from 'molecules/Tables'
import { positionsSelector } from 'utils/selectors'
import { formatCurrency, formatPercentage } from 'utils/format'
import { POSITION_HEADINGS } from 'constants/positionHeadings'

export const DataTable = () => {
  const { positions } = useSelector(positionsSelector)

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
              <Td>
                <Text>{p.id}</Text>
              </Td>
              <Td textAlign='right'>
                <Text>{p.numShares}</Text>
              </Td>
              <Td textAlign='right'>
                <Text>{formatCurrency(p.price)}</Text>
              </Td>
              <Td textAlign='right'>
                <Text>{formatCurrency(p.total)}</Text>
              </Td>
              <Td textAlign='right'>
                <Text>{formatPercentage(p.expectedPercentage)}</Text>
              </Td>
              <Td textAlign='right'>
                <Text>{formatPercentage(p.realPercentage)}</Text>
              </Td>
              <Td textAlign='right'>
                <Text>{p.buy}%</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr></Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}
