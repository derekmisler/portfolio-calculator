import React from 'react'
import { useSelector } from 'react-redux'
import { TableContainer, Table } from 'molecules/Tables'
import { positionsSelector, sharesSelector } from 'utils/selectors'
import { Head } from './Head'
import { Body } from './Body'
import { Foot } from './Foot'

export const DataTable = () => {
  const { totals } = useSelector(positionsSelector)
  const shares = useSelector(sharesSelector)
  return (
    <TableContainer width={[null, 1 / 2]} mx={[2, 'auto']}>
      <Table>
        <Head />
        <Body shares={shares} />
        <Foot totals={totals} />
      </Table>
    </TableContainer>
  )
}
