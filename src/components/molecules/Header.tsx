import { Container } from 'atoms/Container'
import { Heading, Link } from 'atoms/Typography'
import React, { SFC } from 'react'

interface HeaderTypes {
  siteTitle: string
}
export const Header: SFC<HeaderTypes> = ({ siteTitle }) => (
  <Container as='header' py={[2, 4]}>
    <Heading level={1} textAlign='center'>
      <Link to='/'>{siteTitle}</Link>
    </Heading>
  </Container>
)

