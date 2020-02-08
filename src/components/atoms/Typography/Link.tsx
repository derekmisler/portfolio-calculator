import { Link as GatsbyLink } from 'gatsby'
import React, { memo, ReactNode, SFC } from 'react'
import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'

interface LinkProps extends TypographyProps {
  children?: ReactNode,
  to: string
}

const StyledLink = styled(GatsbyLink)<LinkProps>`
  ${typography}
  text-decoration: none;
  color: ${({ theme }) => theme.link};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.linkHover};
  }
  &:active {
    color: ${({ theme }) => theme.link};
  }
`

export const Link: SFC<LinkProps> = memo(({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
))