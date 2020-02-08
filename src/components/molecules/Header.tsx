import React, { SFC } from 'react'
import { Link } from 'gatsby'

interface HeaderTypes {
  siteTitle: string
}
const Header: SFC<HeaderTypes> = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to='/'>{siteTitle}</Link>
    </h1>
  </header>
)

export default Header
