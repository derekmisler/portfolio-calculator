import SEO from 'atoms/Seo'
import { Heading, Link, Text } from 'atoms/Typography'
import Layout from 'organisms/Layout'
import React from 'react'

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <Heading level={2}>Hi from the second page</Heading>
    <Text>Welcome to page 2</Text>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
