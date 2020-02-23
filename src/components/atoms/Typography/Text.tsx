import styled from 'styled-components'
import { typography, TypographyProps, space, SpaceProps, color, ColorProps } from 'styled-system'

interface TextProps extends TypographyProps, SpaceProps, ColorProps {}

export const Text = styled.p<TextProps>`
  ${space}
  ${typography}
  ${color}
  display: block;
`