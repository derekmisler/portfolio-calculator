import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, FieldArray } from 'formik'
import { object, string, number } from 'yup'
import debounce from 'lodash/debounce'
import { Container } from 'atoms/Container'
import { sharesSelector, totalsSelector, positionsSelector } from 'utils/selectors'
import { Loading } from 'atoms/Loading'
import { Row, Column } from 'atoms/Grid'
import { Heading, Text } from 'atoms/Typography'
import { Form, Fieldset } from 'molecules/Forms'
import { DataHead } from './DataHead'
import { DataRow } from './DataRow'
import { AddPosition } from '../AddPosition'
import { Totals } from '../Totals'
import { currencyPattern } from 'utils/validate'
import { updatePosition } from 'utils/actions/positions'
import { ShareTypes } from 'types/positions'

export const DataTable = memo(() => {
  const dispatch = useDispatch()
  const { isFetchingPositions, isUpdatingPositions } = useSelector(positionsSelector)
  const totals = useSelector(totalsSelector)
  const shares = useSelector(sharesSelector)
  const hasShares = shares && shares.length > 0

  const initialValues = { shares }

  const validationSchema = object({
    abbr: string().required('Abbr Required'),
    numShares: number()
      .min(1, '# Too Low')
      .required('# Required'),
    price: string()
      .matches(currencyPattern, '$ Invalid')
      .required('$ Required'),
    expectedPercentage: number().required('% Required')
  })

  const handleChange = debounce((inputValue: { [key: string]: string }) => {
    const [[key, value]] = Object.entries(inputValue)
    const [, index, name] = key.split('.')
    const newValue = { ...shares[Number(index)], [name]: value }
    dispatch(updatePosition(newValue))
  }, 1000)

  const handleSubmit = async (values: { shares: ShareTypes[] }) => {
    const valid = await validationSchema.isValid(values)
    if (valid) dispatch(updatePosition(values))
  }

  return (
    <Container width={[null, 1 / 2]} mx={[2, 'auto']}>
      {isUpdatingPositions || (isFetchingPositions && <Loading />)}
      {!isFetchingPositions && (
        <>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <Fieldset>
                  <Text as='legend'>Positions:</Text>
                  <Row gridTemplateColumns='repeat(8, 1fr)' alignItems='center'>
                    <DataHead />
                    {hasShares ? (
                      <FieldArray
                        name='shares'
                        render={() =>
                          shares.map((s, i) => (
                            <DataRow onChange={handleChange} key={s.id} share={s} index={i} />
                          ))
                        }
                      />
                    ) : (
                      <Column gridColumn='1/-1'>
                        <Heading level={2} textAlign='center'>
                          No positions
                        </Heading>
                      </Column>
                    )}
                  </Row>
                </Fieldset>
              </Form>
            )}
          </Formik>
          <Totals totals={totals} />
          <AddPosition />
        </>
      )}
    </Container>
  )
})
