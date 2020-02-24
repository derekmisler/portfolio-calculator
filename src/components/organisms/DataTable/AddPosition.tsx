import React, { SFC, memo } from 'react'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import { useDispatch } from 'react-redux'
import { Formik, FormikValues } from 'formik'
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
          <Row
            gridTemplateColumns={['1fr', 'repeat(2, 2fr) 1fr']}
            gridTemplateRows={['repeat(5, 1fr)', 'repeat(2, 1fr)']}
            gridAutoFlow='column'
          >
            <Column>
              <Input name='abbr' placeholder='---' label='Abbr' />
            </Column>
            <Column>
              <Input textAlign='right' name='numShares' label='#' />
            </Column>
            <Column>
              <Input type='currency' textAlign='right' name='price' label='$' />
            </Column>
            <Column>
              <Input textAlign='right' name='expectedPercentage' label='%' />
            </Column>
            <Column gridRow={['5', '1/3']} gridColumn={[1, 3]} alignContent='center' justifyContent='center'>
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
