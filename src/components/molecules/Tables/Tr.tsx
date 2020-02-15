import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, border, BorderProps } from 'styled-system'

interface TrProps extends SpaceProps, BorderProps, ColorProps {
}

export const Tr = styled.tr<TrProps>`
  ${border}
  ${color}
  ${space}
`
