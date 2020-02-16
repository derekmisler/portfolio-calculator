import React, { SFC, memo, HTMLProps } from 'react'
import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Loading } from 'atoms/Loading'

interface StyledButtonProps extends SpaceProps, HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  isLoading?: boolean
  variant?: 'action' | 'primary'
  isPrimary?: boolean
}

const PrimaryButtonStyles = `
  width: 100%;
`
const ActionButtonStyles = `
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  align-self: flex-end;
`

const StyledButton = styled.button<StyledButtonProps>`
  ${space}
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme, disabled, isLoading }) => (disabled || isLoading ? theme.disabled : theme.link)};
  ${({ isPrimary }) => isPrimary ? PrimaryButtonStyles : ActionButtonStyles};
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: ${({ disabled, isLoading }) => (disabled || isLoading ? 'unset' : 'pointer')};
    background-color: ${({ theme, disabled, isLoading }) => (disabled || isLoading ? theme.disabled : theme.linkHover)};
  }
`

export const Button: SFC<StyledButtonProps> = memo(({ children, isLoading, ref, as, variant = 'primary', ...props }) => {
  const isPrimary = variant === 'primary'
  return (
  <StyledButton p={isPrimary ? 3 : 1} isPrimary={isPrimary} isLoading={isLoading} {...props}>
    {isLoading ? <Loading /> : children}
  </StyledButton>
)
  })
