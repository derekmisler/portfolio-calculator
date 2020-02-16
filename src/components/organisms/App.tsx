import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SEO from 'atoms/Seo'
import { Heading, Text } from 'atoms/Typography'
import { Button } from 'atoms/Buttons'
import { signOut } from 'utils/actions/auth'
import { PostionTypes } from 'utils/reducers/positions'
import { TableContainer, Table, Tr, Td} from 'molecules/Tables'
import { positionsSelector } from 'utils/selectors'
import { formatCurrency, formatPercentage } from 'utils/format'

export const App = () => {
  const { positions } = useSelector(positionsSelector)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(signOut())
  }
  return (
    <>
      <SEO title='App' />
      <TableContainer>
        <Table>
          { positions.map((p: PostionTypes) => (
            <Tr>
              <Td><Text>{p.id}</Text></Td>
              <Td><Text>{p.numShares}</Text></Td>
              <Td><Text>{formatCurrency(p.price)}</Text></Td>
              <Td><Text>{formatCurrency(p.total)}</Text></Td>
              <Td><Text>{formatPercentage(p.expectedPercentage)}</Text></Td>
              <Td><Text>{formatPercentage(p.realPercentage)}</Text></Td>
              <Td><Text>{p.buy}%</Text></Td>
            </Tr>
          ))}
        </Table>
      </TableContainer>
      <Button type='button' onClick={handleClick}>Sign Out</Button>
    </>
  )
}
