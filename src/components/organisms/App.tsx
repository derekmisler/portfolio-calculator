import SEO from 'atoms/Seo'
import { Heading, Link, Text } from 'atoms/Typography'
import React from 'react'

export const App = () => (
  <>
    <SEO title='App' />
    <Heading level={2}>login</Heading>
    <Text>Welcome to login</Text>
    <Link to='/'>Go back to the homepage</Link>
  </>
)

