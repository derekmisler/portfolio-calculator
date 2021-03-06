import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { graphql, useStaticQuery } from 'gatsby'
import { Button } from 'atoms/Buttons'
import { Container } from 'atoms/Container'
import { Header } from 'molecules/Header'
import { Input, Form } from 'molecules/Forms'
import { Text, Alert } from 'atoms/Typography'
import SEO from 'atoms/Seo'
import { signIn } from 'utils/actions/auth'
import { authSelector } from 'utils/selectors'

interface FormValuesTypes {
  email: string
  password: string
}

export const Login = () => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { isAuthing, authError } = useSelector(authSelector)
  const dispatch = useDispatch()
  const initialValues: FormValuesTypes = { email: '', password: '' }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  })

  const handleSubmit = ({ email, password }: FormValuesTypes) => {
    dispatch(signIn(email, password))
  }

  const handleClick = () => {
    dispatch(signIn())
  }

  return (
    <>
      <SEO title='Login' />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container as='main' width={[null, 1 / 2]} mx={[2, 'auto']}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isValid, touched }) => (
            <Form>
              <Input type='email' name='email' placeholder='you@domain.com' label='Email' mb={4} />
              <Input type='password' name='password' label='Password' mb={5} />
              <Button type='submit' isLoading={isAuthing} disabled={!(touched.email || touched.password) || !isValid}>
                Submit
              </Button>
              <Text textAlign='center' m={0} lineHeight='3'>
                or
              </Text>
              <Button type='button' onClick={handleClick} isLoading={isAuthing}>
                Google
              </Button>
            </Form>
          )}
        </Formik>
        {authError && <Alert>{authError}</Alert>}
      </Container>
    </>
  )
}
