import React from 'react'
import SEO from 'atoms/Seo'
import { Header } from 'molecules/Header'
import { DataTable } from 'organisms/DataTable'

export const App = () => {
  return (
    <>
      <SEO title='App' />
      <Header />
      <DataTable />
    </>
  )
}
