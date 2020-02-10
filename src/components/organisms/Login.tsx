import React from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { Input } from 'molecules/Forms'
import { Button } from 'atoms/Buttons'
import SEO from 'atoms/Seo'
import { RootState } from 'utils/reducers'
import { validatePhone } from 'utils/validate'
import { formatPhone } from 'utils/format'

interface FormValuesTypes {
  phone: string,
  code: string
}

export const Login = () => {
  const auth = useSelector(({ auth }: RootState) => auth) || {}
  const initialValues: FormValuesTypes = { phone: '', code: '' }

  const validationSchema = Yup.object({
    phone: Yup.string().required('Required').test('tel', 'Phone number is not valid', validatePhone),
    code: Yup.number().required('Required')
  })

  const handleSubmit = (values: FormValuesTypes, { setSubmitting }: FormikHelpers<FormValuesTypes>) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400)
  }

  return (
    <>
      <SEO title='Login' />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Input type="tel" name="phone" placeholder={formatPhone(1234567890)} label="Phone Number" />
            <Input type="number" name="code" placeholder="123456" />
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}
