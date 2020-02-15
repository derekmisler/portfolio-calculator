import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, border, BorderProps } from 'styled-system'

interface TfootProps extends SpaceProps, BorderProps, ColorProps {
}

export const Tfoot = styled.tfoot<TfootProps>`
  ${border}
  ${color}
  ${space}
`
