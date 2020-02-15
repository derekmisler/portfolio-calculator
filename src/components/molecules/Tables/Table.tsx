import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, border, BorderProps } from 'styled-system'

interface TableProps extends SpaceProps, BorderProps, ColorProps {
}

export const Table = styled.table<TableProps>`
  ${border}
  ${color}
  ${space}
`
