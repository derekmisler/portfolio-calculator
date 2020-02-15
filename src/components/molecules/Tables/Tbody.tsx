import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, border, BorderProps } from 'styled-system'

interface TbodyProps extends SpaceProps, BorderProps, ColorProps {
}

export const Tbody = styled.tbody<TbodyProps>`
  ${border}
  ${color}
  ${space}
`
