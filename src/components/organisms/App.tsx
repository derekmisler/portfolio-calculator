import React, { useState } from 'react'
import { useFirebase } from 'gatsby-plugin-firebase'
import 'firebase/auth'
import { useDispatch } from 'react-redux'
import SEO from 'atoms/Seo'
import { Heading, Text } from 'atoms/Typography'
import { Button } from 'atoms/Buttons'
import { signOut } from 'utils/actions/user'

export const App = () => {
  const [logout, setLogout] = useState(false)
  const dispatch = useDispatch()
  const handleClick = () => {
    setLogout(true)
  }
  useFirebase(firebase => {
    if (logout) {
      firebase.auth().signOut().then(() => dispatch(signOut()))
    }
  }, [logout])
  return (
    <>
      <SEO title='App' />
      <Heading level={2}>login</Heading>
      <Text>Welcome to login</Text>
      <Button type='button' onClick={handleClick}>Sign Out</Button>
    </>
  )
}
