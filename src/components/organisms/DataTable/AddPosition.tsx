import React, { SFC, memo } from 'react'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input, Form } from 'molecules/Forms'
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
    abbr: Yup.string().required('Required'),
    numShares: Yup.number().required('Required'),
    price: Yup.string()
      .matches(currencyPattern, 'Invalid currency format')
      .required('Required'),
    expectedPercentage: Yup.number().required('Required')
  })

  const handleSubmit = async (values: FormValuesTypes, { resetForm }) => {
    const valid = await validationSchema.isValid(values)
    if (valid) {
      dispatch(addPosition({ ...values, price: String(values.price).replace(/\D/g, '') }))
      resetForm()
    }
  }

  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Row gridTemplateColumns='repeat(8, 1fr)'>
            <Column>
              <Input name='abbr' placeholder='---' />
            </Column>
            <Column>
              <Input textAlign='right' name='numShares' />
            </Column>
            <Column>
              <Input type='currency' textAlign='right' name='price' />
            </Column>
            <Column gridColumn={5}>
              <Input textAlign='right' name='expectedPercentage' />
            </Column>
            <Column gridColumn={8}>
              <Button type='submit' variant='action'>
                <AddRoundedIcon />
              </Button>
            </Column>
          </Row>
        </Form>
      )}
    </Formik>
  )
})
