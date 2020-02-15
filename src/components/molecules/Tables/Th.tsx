import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, border, BorderProps } from 'styled-system'

interface ThProps extends SpaceProps, BorderProps, ColorProps {
}

export const Th = styled.th<ThProps>`
  ${border}
  ${color}
  ${space}
`
