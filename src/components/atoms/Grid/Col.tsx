import { SFC, memo } from 'react'
import styled from 'styled-components'
import { StyledComponentProps } from 'styles'


interface ColProps extends StyledComponentProps {
  row?: boolean
  range?: number | string
  rangeDesktop?: number | string
  textAlign?: string
}
const StyledCol = styled.div<ColProps>`
  display: block;
`

export const Col: SFC<ColProps> = memo(props => <StyledCol {...props} />)
