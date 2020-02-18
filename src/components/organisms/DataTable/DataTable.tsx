import React from 'react'
import { useSelector } from 'react-redux'
import { TableContainer, Table } from 'molecules/Tables'
import { positionsSelector } from 'utils/selectors'
import { Head } from './Head'
import { Body } from './Body'
import { Foot } from './Foot'

export const DataTable = () => {
  const { positions, totals } = useSelector(positionsSelector)
  return (
    <TableContainer width={[null, 1 / 2]} mx={[2, 'auto']}>
      <Table>
        <Head />
        <Body positions={positions} />
        <Foot totals={totals} />
      </Table>
    </TableContainer>
  )
}
