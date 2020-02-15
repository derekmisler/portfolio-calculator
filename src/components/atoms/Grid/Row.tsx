import styled from 'styled-components'
import { grid, GridProps, space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'
import { StyledComponentProps } from 'styles'

interface RowProps extends StyledComponentProps, GridProps, SpaceProps, FlexboxProps {
}

export const Row = styled.div<RowProps>`
  display: grid;
  ${grid}
  ${flexbox}
  ${space}
`
