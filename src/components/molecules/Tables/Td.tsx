import React, { SFC, memo } from 'react'
import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, border, BorderProps, typography, TypographyProps } from 'styled-system'

interface TdProps extends SpaceProps, BorderProps, ColorProps, TypographyProps {}

const StyledTd = styled.td<TdProps>`
  ${border}
  ${color}
  ${space}
  ${typography}
`
export const Td: SFC<TdProps> = memo(({ color, ...props }) => (
  <StyledTd borderBottom='1px solid' borderColor='border' {...props} />
))
