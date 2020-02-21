import React, { SFC, memo } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { Input, Form } from 'molecules/Forms'
import { Tr, Td, Tfoot } from 'molecules/Tables'
import { Text } from 'atoms/Typography'
import { TotalsTypes } from 'utils/reducers/positions'
import { formatCurrency, formatPercentage } from 'utils/format'
import { updateTotals } from 'utils/actions/positions'

interface FootProps {
  totals: TotalsTypes
}

interface FormValuesTypes {
  totalCash: number
}
export const Foot: SFC<FootProps> = memo(({ totals }) => {
  const dispatch = useDispatch()
  const initialValues: FormValuesTypes = { totalCash: totals.totalCash }

  const validationSchema = Yup.object({
    totalCash: Yup.number().required('Required')
  })

  const handleChange = async (values: FormValuesTypes) => {
    const valid = await validationSchema.isValid(values)
    if (valid) dispatch(updateTotals(values))
  }

  return (
    <Tfoot>
      <Tr>
        <Td colSpan={2}>
          <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleChange}
          >
            {() => (
              <Form>
                <Input handleChange={handleChange} name='totalCash' />
              </Form>
            )}
          </Formik>
        </Td>
        <Td textAlign='right'>
          <Text>{formatCurrency(totals.totalPositionValue)}</Text>
        </Td>
        <Td colSpan={2} textAlign='right'>
          <Text color={totals.totalPercentage > 100 ? 'error' : 'accent'}>
            {formatPercentage(totals.totalPercentage)}
          </Text>
        </Td>
        <Td textAlign='right'>
          <Text color={totals.availableCash < 0 ? 'error' : 'accent'}>
            {formatCurrency(totals.availableCash)}
          </Text>
        </Td>
        <Td textAlign='right'>
          <Text>{formatCurrency(totals.costToBuy)}</Text>
        </Td>
        <Td />
      </Tr>
    </Tfoot>
  )
})
