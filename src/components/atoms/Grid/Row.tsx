import { memo, SFC } from 'react'
import styled from 'styled-components'
import {
  StyledComponentProps,
  SmMdLgSizes,
  FlexAlignment
} from 'styles'

interface RowProps extends StyledComponentProps {
  columns?: number
  columnsDesktop?: number
  padding?: SmMdLgSizes
  margin?: SmMdLgSizes
  gap?: SmMdLgSizes
  vAlign?: FlexAlignment
  hAlign?: FlexAlignment
  fullHeight?: boolean
}

const StyledGrid = styled.div<RowProps>`
  position: relative;
  display: grid;
  margin: 0 auto;
  align-items: ${({ vAlign = 'stretch' }) => vAlign};
  justify-items: ${({ hAlign = 'stretch' }) => hAlign};
`
export const Row: SFC<RowProps> = memo(props => <StyledGrid {...props} />)
