import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

interface StyledContainerProps extends LayoutProps, SpaceProps {}

export const Container = styled.main<StyledContainerProps>`
  ${space}
  ${layout}
`
