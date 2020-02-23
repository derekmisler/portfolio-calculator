import React from 'react'
import { Heading } from 'atoms/Typography'
import { Row, Column } from 'atoms/Grid'
import { POSITION_HEADINGS } from 'constants/positionHeadings'

export const DataHead = () => (
  <Row as='header' gridTemplateColumns='repeat(8, 1fr)'>
    {POSITION_HEADINGS.map(h => (
      <Column key={h.key}>
        <Heading textAlign='right' level={4}>
          {h.label}
        </Heading>
      </Column>
    ))}
  </Row>
)
