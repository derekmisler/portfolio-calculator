import React, { SFC, memo } from 'react'
import styled from 'styled-components'
import { grid, GridProps, space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'
import { StyledComponentProps } from 'styles'

interface RowProps extends StyledComponentProps, GridProps, SpaceProps, FlexboxProps {}

const StyledRow = styled.div<RowProps>`
  display: grid;
  ${grid}
  ${flexbox}
  ${space}
`

export const Row: SFC<RowProps> = memo(({ as, ...rest }) => (
  <StyledRow {...rest} as={as} gridColumnGap={3} gridRowGap={3} />
))