import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, border, BorderProps } from 'styled-system'

interface TheadProps extends SpaceProps, BorderProps, ColorProps {
}

export const Thead = styled.thead<TheadProps>`
  ${border}
  ${color}
  ${space}
`
