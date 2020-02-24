import React from 'react'
import { Heading } from 'atoms/Typography'
import { Column } from 'atoms/Grid'
import { POSITION_HEADINGS } from 'constants/positionHeadings'

export const DataHead = () => (
  <>
    {POSITION_HEADINGS.map(h => (
      <Column key={h.key}>
        <Heading textAlign='right' level={3}>
          {h.label}
        </Heading>
      </Column>
    ))}
  </>
)
