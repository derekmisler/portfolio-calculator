import React, { SFC, memo } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import { Input, Form, Fieldset } from 'molecules/Forms'
import { Row, Column } from 'atoms/Grid'
import { Text } from 'atoms/Typography'
import { TotalsTypes } from 'types/positions'
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
  const initialValues: FormValuesTypes = { totalCash: totals.totalCash }

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
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleChange}
    >
      {() => (
        <Form>
          <Fieldset>
            <Text as='legend'>Totals:</Text>
            <Row
              gridTemplateColumns={['100%', 'repeat(8, 1fr)']}
              gridTemplateRows={['repeat(5, 1fr)', 'auto']}
              gridAutoFlow='column'
            >
              <Column gridColumn={1}>
                <Input
                  textAlign={['center', 'left']}
                  handleChange={handleChange}
                  name='totalCash'
                  type='currency'
                />
              </Column>
              <Column gridColumn={[null, 4]}>
                <Text textAlign={['center', 'right']}>
                  {formatCurrency(totals.totalPositionValue)}
                </Text>
              </Column>
              <Column gridColumn={[null, 5]}>
                <Text
                  textAlign={['center', 'right']}
                  color={totals.totalPercentage > 100 ? 'error' : 'accent'}
                >
                  {formatPercentage(totals.totalPercentage)}
                </Text>
              </Column>
              <Column gridColumn={[null, 6]}>
                <Text
                  textAlign={['center', 'right']}
                  color={totals.availableCash < 0 ? 'error' : 'accent'}
                >
                  {formatCurrency(totals.availableCash)}
                </Text>
              </Column>
              <Column gridColumn={[null, 7]}>
                <Text textAlign={['center', 'right']}>{formatCurrency(totals.costToBuy)}</Text>
              </Column>
            </Row>
          </Fieldset>
        </Form>
      )}
    </Formik>
  )
})
