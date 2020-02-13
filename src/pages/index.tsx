import { Container } from 'atoms/Container'
import { graphql, useStaticQuery } from 'gatsby'
import { Footer } from 'molecules/Footer'
import { Header } from 'molecules/Header'
import { App } from 'organisms/App'
import { Login } from 'organisms/Login'
import React from 'react'
import { useSelector } from 'react-redux'
import { GoogleFont, TypographyStyle } from 'react-typography'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme, TYPOGRAPHY } from 'styles'
import { RootState } from 'utils/reducers'

const IndexPage = () => {
  const { isLoggedIn } = useSelector(({ user }: RootState) => user) || {}

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
      <Container width={[null, 1 / 2]} mx={[2, 'auto']}>
        { isLoggedIn ? <App/ > : <Login /> }
       </Container>
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default IndexPage
