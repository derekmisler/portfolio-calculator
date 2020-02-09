import SEO from 'atoms/Seo'
import { Heading, Link, Text } from 'atoms/Typography'
import { Layout } from 'organisms/Layout'
import React, { SFC } from 'react'

interface LoginProps {
  path: string
}
export const Login: SFC<LoginProps> = () => (
  <Layout>
    <SEO title='Login' />
    <Heading level={2}>Hi from the second page</Heading>
    <Text>Welcome to page 2</Text>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

