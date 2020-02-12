import React, { SFC, memo, HTMLProps } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Loading } from 'atoms/Loading'

interface StyledButtonProps extends SpaceProps, HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  isLoading?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  ${space}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: block;
  border: 0;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme, disabled, isLoading }) => (disabled || isLoading ? theme.disabled : theme.link)};
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: ${({ disabled, isLoading }) => (disabled || isLoading ? 'unset' : 'pointer')};
    background-color: ${({ theme, disabled, isLoading }) => (disabled || isLoading ? theme.disabled : theme.linkHover)};
  }
`

export const Button: SFC<StyledButtonProps> = memo(({ children, isLoading, ref, as, ...props }) => (
  <StyledButton p={3} isLoading={isLoading} {...props}>
    {isLoading ? <Loading /> : children}
  </StyledButton>
))
