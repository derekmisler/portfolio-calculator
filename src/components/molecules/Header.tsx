import { Heading, Link } from 'atoms/Typography'
import React, { SFC } from 'react'

interface HeaderTypes {
  siteTitle: string
}
export const Header: SFC<HeaderTypes> = ({ siteTitle }) => (
  <header>
    <Heading level={1}>
      <Link to='/'>{siteTitle}</Link>
    </Heading>
  </header>
)

