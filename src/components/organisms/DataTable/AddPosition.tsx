import React, { SFC, memo } from 'react'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input } from 'molecules/Forms'
import { Row, Column } from 'atoms/Grid'
import { addPosition } from 'utils/actions/positions'
import { Button } from 'atoms/Buttons'

interface FormValuesTypes {}

export const AddPosition: SFC<{}> = memo(() => {
  const dispatch = useDispatch()
  const initialValues: FormValuesTypes = {
    abbr: '---',
    numShares: 1,
    price: 0,
    expectedPercentage: 100
  }

  const validationSchema = Yup.object({
    abbr: Yup.string().required('Required'),
    numShares: Yup.number().required('Required'),
    price: Yup.number().required('Required'),
    expectedPercentage: Yup.number().required('Required')
  })

  const handleSubmit = async (values: FormValuesTypes) => {
    const valid = await validationSchema.isValid(values)
    if (valid) dispatch(addPosition(values))
  }

  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {() => (
        <Row as='form' gridTemplateColumns='repeat(8, 1fr)'>
          <Column>
            <Input name='abbr' />
          </Column>
          <Column>
            <Input textAlign='right' name='numShares' />
          </Column>
          <Column>
            <Input textAlign='right' name='price' />
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
      )}
    </Formik>
  )
})
