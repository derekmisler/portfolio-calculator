import React, { SFC, memo } from 'react'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import { useDispatch } from 'react-redux'
import { Formik, FormikValues } from 'formik'
import * as Yup from 'yup'
import { Input, Form, Fieldset } from 'molecules/Forms'
import { Text } from 'atoms/Typography'
import { Row, Column } from 'atoms/Grid'
import { addPosition } from 'utils/actions/positions'
import { Button } from 'atoms/Buttons'
import { currencyPattern } from 'utils/validate'

interface FormValuesTypes {
  abbr: string
  numShares: number
  price: number
  expectedPercentage: number
}

export const AddPosition: SFC<{}> = memo(() => {
  const dispatch = useDispatch()
  const initialValues: FormValuesTypes = {
    abbr: '',
    numShares: 1,
    price: 0,
    expectedPercentage: 100
  }

  const validationSchema = Yup.object({
    abbr: Yup.string().required('Abbr Required'),
    numShares: Yup.number()
      .min(1, '# Too Low')
      .required('# Required'),
    price: Yup.string()
      .matches(currencyPattern, '$ Invalid')
      .required('$ Required'),
    expectedPercentage: Yup.number().required('% Required')
  })

  const handleSubmit = async (values: FormValuesTypes, { resetForm }: FormikValues) => {
    const valid = await validationSchema.isValid(values)
    if (valid) {
      dispatch(
        addPosition({
          ...values,
          abbr: String(values.abbr).toUpperCase(),
          price: String(values.price).replace(/\D/g, '')
        })
      )
      resetForm()
    }
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Fieldset>
            <Text as='legend'>Add Position:</Text>
            <Row
              gridTemplateColumns={['100%', 'repeat(8, 1fr)']}
              gridTemplateRows={['repeat(5, 1fr)', 'auto']}
              gridAutoFlow='column'
            >
              <Column>
                <Input name='abbr' textAlign={['center', 'left']}  placeholder='---' />
              </Column>
              <Column>
                <Input textAlign={['center', 'right']} name='numShares' />
              </Column>
              <Column>
                <Input type='currency' textAlign={['center', 'right']}  name='price' />
              </Column>
              <Column gridColumn={[null, 5]}>
                <Input textAlign={['center', 'right']}  name='expectedPercentage' />
              </Column>
              <Column gridColumn={[null, 8]} alignContent='center' justifyContent='center'>
                <Button type='submit' variant='action'>
                  <AddRoundedIcon />
                </Button>
              </Column>
            </Row>
          </Fieldset>
        </Form>
      )}
    </Formik>
  )
})
