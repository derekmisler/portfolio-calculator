import React, { SFC, memo } from 'react'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input, Form } from 'molecules/Forms'
import { Tr, Td } from 'molecules/Tables'
import { Text } from 'atoms/Typography'
import { ShareTypes } from 'utils/reducers/positions'
import { deletePosition, updatePosition } from 'utils/actions/positions'
import { formatCurrency, formatPercentage } from 'utils/format'
import { Button } from 'atoms/Buttons'

interface BodyProps {
  share: ShareTypes
}
interface FormValuesTypes {

}

export const Row: SFC<BodyProps> = memo(({ share: s }) => {
  const dispatch = useDispatch()
  const initialValues: FormValuesTypes = {
    abbr: s.abbr,
    numShares: s.numShares,
    price: s.price,
    expectedPercentage: s.expectedPercentage
  }

  const validationSchema = Yup.object({
    abbr: Yup.string().required('Required'),
    numShares: Yup.number().required('Required'),
    price: Yup.number().required('Required'),
    expectedPercentage: Yup.number().required('Required')
  })

  const handleChange = (values: FormValuesTypes) => {
    dispatch(updatePosition({ ...values, id: s.id }))
  }
  const handleDeleteClick = () => dispatch(deletePosition(s.id))
  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleChange}
    >
      {() => (
        <Tr key={s.id} id={s.id}>
          <Td>
            <Form>
              <Input name='abbr' handleChange={handleChange} />
            </Form>
          </Td>
          <Td>
            <Form>
              <Input textAlign='right' name='numShares' handleChange={handleChange} />
            </Form>
          </Td>
          <Td textAlign='right'>
            <Form>
              <Input textAlign='right' name='price' handleChange={handleChange} />
            </Form>
          </Td>
          <Td textAlign='right'>
            <Text>{formatCurrency(s.total)}</Text>
          </Td>
          <Td textAlign='right'>
            <Text>{formatPercentage(s.expectedPercentage)}</Text>
          </Td>
          <Td textAlign='right'>
            <Text>{formatPercentage(s.realPercentage)}</Text>
          </Td>
          <Td textAlign='right'>
            <Text>{s.buy || 0}</Text>
          </Td>
          <Td>
            <Button type='button' variant='action' onClick={handleDeleteClick}>
              <CloseRoundedIcon />
            </Button>
          </Td>
        </Tr>
      )}
    </Formik>
  )
})
