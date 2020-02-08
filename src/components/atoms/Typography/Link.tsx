import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'

interface LinkProps extends TypographyProps {}

export const Link = styled(GatsbyLink)<LinkProps>`
  ${typography}
`
