import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableContainer, Table } from 'molecules/Tables'
import { positionsSelector, sharesSelector, totalsSelector } from 'utils/selectors'
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
  const positionValues = createData('---', 0, 0, 100)
  const handleAddPosition = () => dispatch(addPosition(positionValues))
  return (
    <TableContainer width={[null, 1 / 2]} mx={[2, 'auto']}>
      <Table>
        <Head />
        <Body shares={shares} isFetchingPositions={isFetchingPositions} addPosition={handleAddPosition} />
        <Foot totals={totals} />
      </Table>
    </TableContainer>
  )
}
