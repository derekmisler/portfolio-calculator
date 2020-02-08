import SEO from 'atoms/Seo'
import { Heading, Link } from 'atoms/Typography'
import Layout from 'organisms/Layout'
import React from 'react'


const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Heading level={2}>Hi people</Heading>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
