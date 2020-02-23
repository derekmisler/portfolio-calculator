import React, { SFC, memo } from 'react'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input } from 'molecules/Forms'
import { Row, Column } from 'atoms/Grid'
import { Text } from 'atoms/Typography'
import { ShareTypes } from 'utils/reducers/positions'
import { deletePosition, updatePosition } from 'utils/actions/positions'
import { formatCurrency, formatPercentage } from 'utils/format'
import { Button } from 'atoms/Buttons'

interface BodyProps {
  share: ShareTypes
}
interface FormValuesTypes {}

export const DataRow: SFC<BodyProps> = memo(({ share: s }) => {
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
        <Row as='form' gridTemplateColumns='repeat(8, 1fr)'>
          <Column>
            <Input name='abbr' handleChange={handleChange} />
          </Column>
          <Column>
            <Input textAlign='right' name='numShares' handleChange={handleChange} />
          </Column>
          <Column>
            <Input textAlign='right' name='price' handleChange={handleChange} />
          </Column>
          <Text textAlign='right'>{formatCurrency(s.total)}</Text>
          <Column>
            <Input textAlign='right' name='expectedPercentage' handleChange={handleChange} />
          </Column>
          <Column>
            <Text textAlign='right'>{formatPercentage(s.realPercentage)}</Text>
          </Column>
          <Column>
            <Text textAlign='right'>{s.buy || 0}</Text>
          </Column>
          <Column>
            <Button type='button' variant='action' onClick={handleDeleteClick}>
              <CloseRoundedIcon />
            </Button>
          </Column>
        </Row>
      )}
    </Formik>
  )
})
