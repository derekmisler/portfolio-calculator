import { Router } from "@reach/router"
import { Layout } from 'organisms/Layout'
import { Login } from 'pages/login'
import React from 'react'


const IndexPage = () => (
  <Layout>
    <Router>
      <Login path="/login" />
    </Router>
  </Layout>
)

export default IndexPage
