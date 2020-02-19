import React, { SFC, memo } from 'react'
import { Tr, Td, Tfoot } from 'molecules/Tables'
import { Text } from 'atoms/Typography'
import { TotalsTypes } from 'utils/reducers/positions'
import { formatCurrency, formatPercentage } from 'utils/format'

interface FootProps {
  totals: TotalsTypes
}

export const Foot: SFC<FootProps> = memo(({ totals }) => (
  <Tfoot>
    <Tr>
      <Td colSpan={2}><Text>{formatCurrency(totals.totalCash)}</Text></Td>
      <Td textAlign='right'><Text>{formatCurrency(totals.totalPositionValue)}</Text></Td>
      <Td colSpan={2} textAlign='right'>
        <Text color={totals.totalPercentage > 100 ? 'error' : 'accent'}>
          {formatPercentage(totals.totalPercentage)}
        </Text>
      </Td>
      <Td textAlign='right'>
      <Text color={totals.availableCash < 0 ? 'error' : 'accent'}>
        {formatCurrency(totals.availableCash)}
       </Text></Td>
      <Td textAlign='right'><Text>{formatCurrency(totals.costToBuy)}</Text></Td>
      <Td />
    </Tr>
  </Tfoot>
))
