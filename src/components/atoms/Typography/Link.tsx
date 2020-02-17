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
  color: ${({ theme }) => theme.colors.link};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.linkHover};
  }
  &:active {
    color: ${({ theme }) => theme.colors.link};
  }
`

export const Link: SFC<LinkProps> = memo(({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
))