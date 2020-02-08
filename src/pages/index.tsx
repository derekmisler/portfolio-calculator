import React from 'react'
import { Link } from 'gatsby'

import Layout from 'organisms/Layout'
import Image from 'atoms/Image'
import SEO from 'atoms/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
