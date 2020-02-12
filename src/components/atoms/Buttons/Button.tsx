import React, { SFC, memo, HTMLProps } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Loading } from 'atoms/Loading'

interface StyledButtonProps extends SpaceProps, HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
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
  background-color: ${({ theme, disabled, loading }) => (disabled || loading ? theme.disabled : theme.link)};
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: ${({ disabled, loading }) => (disabled || loading ? 'unset' : 'pointer')};
    background-color: ${({ theme, disabled, loading }) => (disabled || loading ? theme.disabled : theme.linkHover)};
  }
`

export const Button: SFC<StyledButtonProps> = memo(({ children, loading, ref, as, ...props }) => (
  <StyledButton p={3} loading={loading} {...props}>
    {loading ? <Loading /> : children}
  </StyledButton>
))
