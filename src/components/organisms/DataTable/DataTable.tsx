import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'atoms/Container'
import { sharesSelector, totalsSelector, positionsSelector } from 'utils/selectors'
import { Loading } from 'atoms/Loading'
import { DataHead } from './DataHead'
import { DataBody } from './DataBody'
import { DataFoot } from './DataFoot'

export const DataTable = () => {
  const { isFetchingPositions } = useSelector(positionsSelector)
  const totals = useSelector(totalsSelector)
  const shares = useSelector(sharesSelector)
  return (
    <Container width={[null, 1 / 2]} mx={[2, 'auto']}>
      { isFetchingPositions && <Loading /> }
      <DataHead />
      <DataBody shares={shares} />
      <DataFoot totals={totals} />
    </Container>
  )
}
