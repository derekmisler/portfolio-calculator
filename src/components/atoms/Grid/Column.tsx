import styled from 'styled-components'
import { space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'
import { StyledComponentProps } from 'styles'


interface ColumnProps extends StyledComponentProps, SpaceProps, FlexboxProps {
  row?: boolean
  range?: number | string
  rangeDesktop?: number | string
}
export const Column = styled.div<ColumnProps>`
  ${space}
  ${flexbox}
`
