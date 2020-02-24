import React, { SFC, memo } from 'react'
import styled from 'styled-components'
import { flexbox, FlexboxProps, border, BorderProps, space, SpaceProps, layout, LayoutProps } from 'styled-system'

interface FieldsetProps extends SpaceProps, LayoutProps, BorderProps, FlexboxProps {}

const StyledFieldset = styled.fieldset<FieldsetProps>`
  ${border}
  ${flexbox}
  ${layout}
  ${space}
`

export const Fieldset: SFC<FieldsetProps> = memo(props => (
  <StyledFieldset border='0px' borderStyle='solid' borderColor='link' borderTopWidth={4} my={3} py={3} {...props} />
))