import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'

interface TableContainerProps extends SpaceProps, FlexboxProps, LayoutProps {
}

export const TableContainer = styled.section<TableContainerProps>`
  ${flexbox}
  ${layout}
  ${space}
  display: flex;
  flex-basis: 100%;
`
