import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableContainer, Table, Tbody, Tr, Td } from 'molecules/Tables'
import { positionsSelector, sharesSelector, totalsSelector } from 'utils/selectors'
import { ShareTypes } from 'utils/reducers/positions'
import { Button } from 'atoms/Buttons'
import { createData } from 'utils/createData'
import { addPosition } from 'utils/actions/positions'
import { Head } from './Head'
import { Body } from './Body'
import { Foot } from './Foot'

export const DataTable = () => {
  const { isFetchingPositions } = useSelector(positionsSelector)
  const totals = useSelector(totalsSelector)
  const shares = useSelector(sharesSelector)
  const dispatch = useDispatch()
  const positionValues = createData('---', 1, 1, 100)
  const handleClick = () => dispatch(addPosition(positionValues))
  return (
    <TableContainer width={[null, 1 / 2]} mx={[2, 'auto']}>
      <Table>
        <Head />
        <Tbody>
          {shares.map((s: ShareTypes) => (
            <Body key={s.positionId} share={s} />
          ))}
          <Tr>
            <Td colSpan={7}>
              <Button onClick={handleClick} isLoading={isFetchingPositions}>Add Position</Button>
            </Td>
          </Tr>
        </Tbody>
        <Foot totals={totals} />
      </Table>
    </TableContainer>
  )
}
