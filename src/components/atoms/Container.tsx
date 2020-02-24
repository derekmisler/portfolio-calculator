import styled from 'styled-components'
import { StyledComponentProps } from 'styles'
import { flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from 'styled-system'

interface StyledContainerProps extends StyledComponentProps, LayoutProps, SpaceProps, FlexboxProps {}

export const Container = styled.section<StyledContainerProps>`
  ${flexbox}
  ${space}
  ${layout}
`
