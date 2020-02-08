/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { SFC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GlobalStyle, theme, TYPOGRAPHY } from 'styles'
import { TypographyStyle, GoogleFont } from 'react-typography'
import Header from 'molecules/Header'

interface LayoutTypes {
  children: JSX.Element[]
}

const Layout: SFC<LayoutTypes> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle theme={theme} />
      <TypographyStyle typography={TYPOGRAPHY} />
      <GoogleFont typography={TYPOGRAPHY} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
