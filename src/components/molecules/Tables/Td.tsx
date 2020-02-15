import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, border, BorderProps } from 'styled-system'

interface TdProps extends SpaceProps, BorderProps, ColorProps {
}

export const Td = styled.td<TdProps>`
  ${border}
  ${color}
  ${space}
`
