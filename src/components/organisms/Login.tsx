import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useFirebase } from 'gatsby-plugin-firebase'
import 'firebase/auth'
import { Input } from 'molecules/Forms'
import { Button } from 'atoms/Buttons'
import { Alert } from 'atoms/Typography'
import SEO from 'atoms/Seo'
import { RootState } from 'utils/reducers'
import { updateUserData, userUserDataError } from 'utils/actions/user'

interface FormValuesTypes {
  email: string
  password: string
}

export const Login = () => {
  const { isUpdating, userError } = useSelector(({ user }: RootState) => user) || {}
  const dispatch = useDispatch()
  const initialValues: FormValuesTypes = { email: '', password: '' }
  const [values, setValues] = useState(initialValues)

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  })

  const handleSubmit = ({ email, password }: FormValuesTypes) => {
    dispatch(updateUserData())
    setValues({ email, password })
  }

  useFirebase(firebase => {
    if (!!values.email && !!values.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(({ user }) => dispatch(updateUserData(user)))
        .catch(({ message }) => dispatch(userUserDataError(message)))
    }
  }, [values])


  return (
    <>
      <SEO title='Login' />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isValid, touched }) => (
          <Form>
            <Input type='email' name='email' placeholder='you@domain.com' label='Email' autoFocus mb={4} />
            <Input type='password' name='password' label='Password' mb={5} />
            <Button type='submit' isLoading={isUpdating} disabled={!(touched.email || touched.password) || !isValid}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      {userError && <Alert>{userError}</Alert>}
    </>
  )
}
