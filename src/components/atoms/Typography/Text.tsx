import styled from 'styled-components'
import { typography, TypographyProps, space, SpaceProps } from 'styled-system'

interface TextProps extends TypographyProps, SpaceProps {}

export const Text = styled.p<TextProps>`
  ${space}
  ${typography}
`