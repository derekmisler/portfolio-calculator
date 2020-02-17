import React, { SFC, memo } from 'react'
import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'

interface TfootProps extends SpaceProps, ColorProps, TypographyProps {}

const StyledTfoot = styled.tfoot<TfootProps>`
  ${color}
  ${space}
  ${typography}
`

export const Tfoot: SFC<TfootProps> = memo(({ color, ...props }) => (
  <StyledTfoot color='accent' fontWeight='bold' {...props} />
))
