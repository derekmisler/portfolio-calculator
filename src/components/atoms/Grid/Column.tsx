import styled from 'styled-components'
import { grid, GridProps, space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'
import { StyledComponentProps } from 'styles'


interface ColumnProps extends StyledComponentProps, SpaceProps, FlexboxProps, GridProps {}

export const Column = styled.div<ColumnProps>`
  ${space}
  ${flexbox}
  ${grid}
`
