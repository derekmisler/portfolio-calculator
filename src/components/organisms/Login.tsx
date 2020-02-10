import React from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { Input } from 'molecules/Forms'
import { Button } from 'atoms/Buttons'
import SEO from 'atoms/Seo'
import { RootState } from 'utils/reducers'

interface FormValuesTypes {
  email: string,
  password: string
}

export const Login = () => {
  const auth = useSelector(({ auth }: RootState) => auth) || {}
  const initialValues: FormValuesTypes = { email: '', password: '' }

  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().required('Password is required')
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
            <Input type="email" name="email" placeholder="you@domain.com" label="Email" autoFocus mb={4} />
            <Input type="password" name="password" label="Password" mb={5}/>
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}
