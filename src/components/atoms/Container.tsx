import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'

interface StyledContainerProps extends LayoutProps, SpaceProps, FlexboxProps {}

export const Container = styled.section<StyledContainerProps>`
  display: flex;
  ${space}
  ${layout}
  ${flexbox}
`
