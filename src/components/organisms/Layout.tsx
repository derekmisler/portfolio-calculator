/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Container } from 'atoms/Container'
import { graphql, useStaticQuery } from 'gatsby'
import { Footer } from 'molecules/Footer'
import { Header } from 'molecules/Header'
import React, { SFC } from 'react'
import { GoogleFont, TypographyStyle } from 'react-typography'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme, TYPOGRAPHY } from 'styles'

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
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <TypographyStyle typography={TYPOGRAPHY} />
      <GoogleFont typography={TYPOGRAPHY} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container width={[1, 1 / 2]} m='0 auto'>{children}</Container>
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default Layout
