import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'atoms/Buttons'
import { Alert } from 'atoms/Typography'
import SEO from 'atoms/Seo'
import { RootState } from 'utils/reducers'
import { signIn } from 'utils/actions/auth'

export const Login = () => {
  const { isAuthing, authError } = useSelector(({ auth }: RootState) => auth) || {}
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(signIn())
  }

  return (
    <>
      <SEO title='Login' />
      <Button type='button' onClick={handleClick} isLoading={isAuthing}>
        Sign In
      </Button>
      {authError && <Alert>{authError}</Alert>}
    </>
  )
}
