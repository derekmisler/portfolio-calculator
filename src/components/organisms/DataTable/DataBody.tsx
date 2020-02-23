import React, { memo, SFC } from 'react'
import { ShareTypes } from 'utils/reducers/positions'
import { DataRow } from './DataRow'
import { AddPosition } from './AddPosition'

interface BodyProps {
  shares: ShareTypes[]
}

export const DataBody: SFC<BodyProps> = memo(({ shares }) => {
  console.log('----------')
  console.log('shares', shares)
  console.log('^^^^^^^^^^')
  return (
  <>
    {shares.map(s => (
      <DataRow key={s.id} share={s} />
    ))}
    <AddPosition />
  </>
)
    })
