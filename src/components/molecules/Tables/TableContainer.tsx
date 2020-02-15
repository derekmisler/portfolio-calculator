import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'

interface TableContainerProps extends SpaceProps, FlexboxProps, LayoutProps {
}

export const TableContainer = styled.div<TableContainerProps>`
  ${flexbox}
  ${layout}
  ${space}
`
