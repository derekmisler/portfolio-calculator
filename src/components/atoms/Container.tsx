import styled from 'styled-components'
import { memo } from 'react'
import { LAYOUT } from 'styles'

const { spacing } = LAYOUT

const StyledContainer = styled.main`
  padding: 0;
  margin: ${spacing.large};
  padding-bottom: calc(${spacing.large} * 2);
  min-height: 100vh;
  max-width: 100%;
  position: relative;
`

export const Container = memo(({ children }) => (
  <StyledContainer>{children}</StyledContainer>
))
