import React, { useState, FormEvent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from 'atoms/Buttons'
import SEO from 'atoms/Seo'
import { RootState } from 'utils/reducers'
import { validatePhone } from 'utils/validate'
import { formatPhone } from 'utils/format'

export const Login = () => {
  const auth = useSelector(({ auth }: RootState) => auth) || {}
  const [phoneVal, setPhoneVal] = useState('')
  const [codeVal, setCodeVal] = useState('')

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { id } = e?.currentTarget
    if (id === 'phone') {
      setPhoneVal(formatPhone(e?.currentTarget?.value))
    } else {
      setCodeVal(e?.currentTarget?.value)
    }
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <SEO title='Login' />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}
