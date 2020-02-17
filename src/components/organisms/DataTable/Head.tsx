import React from 'react'
import { Heading } from 'atoms/Typography'
import { Tr, Th, Thead } from 'molecules/Tables'
import { POSITION_HEADINGS } from 'constants/positionHeadings'

export const Head = () => (
  <Thead>
    <Tr>
      {POSITION_HEADINGS.map(h => (
        <Th key={h.key} textAlign='right'>
          <Heading level={4}>{h.label}</Heading>
        </Th>
      ))}
    </Tr>
  </Thead>
)
