import React, { memo, SFC } from 'react'
import { ShareTypes } from 'utils/reducers/positions'
import { DataRow } from './DataRow'
import { AddPosition } from './AddPosition'

interface BodyProps {
  shares: ShareTypes[]
}

export const DataBody: SFC<BodyProps> = memo(({ shares }) => (
  <>
    {shares.map(s => (
      <DataRow key={s.id} share={s} />
    ))}
    <AddPosition />
  </>
))
