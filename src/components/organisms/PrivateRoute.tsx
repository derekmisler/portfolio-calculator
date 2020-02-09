import { navigate } from 'gatsby'
import React, { SFC } from 'react'

interface PrivateRouteTypes {
  component: SFC
  location: { pathname: string }
}
export const PrivateRoute: SFC<PrivateRouteTypes> = ({ component: Component, location, ...rest }) => {
  if (!true && location.pathname !== '/login') {
    navigate('/login')
    return null
  }
  return <Component {...rest} />
}
