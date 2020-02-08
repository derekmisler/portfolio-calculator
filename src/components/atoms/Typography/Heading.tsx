import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'

interface StyledHeadingProps extends TypographyProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled.div.attrs<StyledHeadingProps>(({ level }) => ({
  role: 'heading',
  'aria-level': level,
  as: `h${level}`
}))<StyledHeadingProps>`
  ${typography}
`
