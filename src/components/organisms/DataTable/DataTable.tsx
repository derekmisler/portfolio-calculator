import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'atoms/Container'
import { sharesSelector, totalsSelector, positionsSelector } from 'utils/selectors'
import { Loading } from 'atoms/Loading'
import { Row } from 'atoms/Grid'
import { DataHead } from './DataHead'
import { DataRow } from './DataRow'
import { AddPosition } from './AddPosition'
import { DataFoot } from './DataFoot'

export const DataTable = memo(() => {
  const { isFetchingPositions, isUpdatingPositions } = useSelector(positionsSelector)
  const totals = useSelector(totalsSelector)
  const shares = useSelector(sharesSelector)
  return (
    <Container width={[null, 1 / 2]} mx={[2, 'auto']}>
      {isUpdatingPositions || (isFetchingPositions && <Loading />)}
      {/* {!isFetchingPositions && (
        <Row gridTemplateColumns='repeat(8, 1fr)'>
          <DataHead />
          <>
            {shares.map(s => (
              <DataRow key={s.id} share={s} />
            ))}
          </>
          <DataFoot totals={totals} />
        </Row>
      )} */}
      <AddPosition />
    </Container>
  )
})
