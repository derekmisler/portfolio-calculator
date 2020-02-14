import React from 'react'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import SEO from 'atoms/Seo'
import { Heading, Text } from 'atoms/Typography'
import { Button } from 'atoms/Buttons'
import { signOut } from 'utils/actions/auth'

export const App = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    firebase.auth().signOut().then(() => dispatch(signOut()))
  }
  return (
    <>
      <SEO title='App' />
      <Heading level={2}>login</Heading>
      <Text>Welcome to login</Text>
      <Button type='button' onClick={handleClick}>Sign Out</Button>
    </>
  )
}
