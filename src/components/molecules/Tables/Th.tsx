import React, { SFC, memo } from 'react'
import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, border, BorderProps, typography, TypographyProps } from 'styled-system'

interface ThProps extends SpaceProps, BorderProps, ColorProps, TypographyProps {}

const StyledTh = styled.th<ThProps>`
  ${border}
  ${color}
  ${space}
  ${typography}
`
export const Th: SFC<ThProps> = memo(({ color, ...props }) => (
  <StyledTh {...props} />
))