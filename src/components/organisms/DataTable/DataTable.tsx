import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'atoms/Container'
import { sharesSelector, totalsSelector } from 'utils/selectors'
import { DataHead } from './DataHead'
import { DataBody } from './DataBody'
import { DataFoot } from './DataFoot'

export const DataTable = () => {
  const totals = useSelector(totalsSelector)
  const shares = useSelector(sharesSelector)
  return (
    <Container width={[null, 1 / 2]} mx={[2, 'auto']}>
      <DataHead />
      <DataBody shares={shares} />
      <DataFoot totals={totals} />
    </Container>
  )
}
