import React, { SFC, memo } from 'react'
import { Tr, Td, Tfoot } from 'molecules/Tables'
import { TotalsTypes } from 'utils/reducers/positions'
import { formatCurrency, formatPercentage } from 'utils/format'

interface FootProps {
  totals: TotalsTypes
}

export const Foot: SFC<FootProps> = memo(({ totals }) => (
  <Tfoot>
    <Tr>
      <Td colSpan={2}>{formatCurrency(totals.totalCash)}</Td>
      <Td textAlign='right'>{formatCurrency(totals.totalPositionValue)}</Td>
      <Td textAlign='right'>{formatPercentage(totals.totalPercentage)}</Td>
      <Td textAlign='right'>{formatCurrency(totals.availableCash)}</Td>
      <Td textAlign='right'>{formatCurrency(totals.costToBuy)}</Td>
    </Tr>
  </Tfoot>
))

