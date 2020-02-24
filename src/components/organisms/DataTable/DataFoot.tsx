import React, { SFC, memo, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import { Input, Form } from 'molecules/Forms'
import { Row, Column } from 'atoms/Grid'
import { Text } from 'atoms/Typography'
import { TotalsTypes } from 'utils/reducers/positions'
import { formatCurrency, formatPercentage } from 'utils/format'
import { currencyPattern } from 'utils/validate'
import { updateTotals } from 'utils/actions/positions'

interface FootProps {
  totals: TotalsTypes
}

interface FormValuesTypes {
  totalCash: number
}
export const DataFoot: SFC<FootProps> = memo(({ totals }) => {
  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    totalCash: Yup.string()
      .matches(currencyPattern, 'Invalid currency format')
      .required('Required')
  })
  const handleChange = debounce(async (values: FormValuesTypes) => {
    const valid = await validationSchema.isValid(values)
    if (valid) dispatch(updateTotals(values))
  }, 1000)

  return (
    <>
      <Column>
        <Input handleChange={handleChange} name='totalCash' type='currency' value={totals.totalCash} />
      </Column>
      <Column gridColumn={3}>
        <Text textAlign='right'>{formatCurrency(totals.totalPositionValue)}</Text>
      </Column>
      <Column gridColumn={5}>
        <Text textAlign='right' color={totals.totalPercentage > 100 ? 'error' : 'accent'}>
          {formatPercentage(totals.totalPercentage)}
        </Text>
      </Column>
      <Column>
        <Text textAlign='right' color={totals.availableCash < 0 ? 'error' : 'accent'}>
          {formatCurrency(totals.availableCash)}
        </Text>
      </Column>
      <Column>
        <Text textAlign='right'>{formatCurrency(totals.costToBuy)}</Text>
      </Column>
    </>
  )
})
