import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GoogleFont, TypographyStyle } from 'react-typography'
import { Footer } from 'molecules/Footer'
import { App } from 'organisms/App'
import { Login } from 'organisms/Login'
import { GlobalStyle, theme, TYPOGRAPHY } from 'styles'
import { authSelector } from 'utils/selectors'

const IndexPage = () => {
  const { isLoggedIn } = useSelector(authSelector)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <TypographyStyle typography={TYPOGRAPHY} />
      <GoogleFont typography={TYPOGRAPHY} />
      {isLoggedIn ? <App /> : <Login />}
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default IndexPage
