import React, { SFC, memo, HTMLProps } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

interface StyledButtonProps extends SpaceProps, HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
}

const StyledButton = styled.button<StyledButtonProps>`
  ${space}
  width: 100%;
  display: block;
  border: 0;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme, disabled }) => (disabled ? theme.disabled : theme.link)};
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
    background-color: ${({ theme, disabled }) => (disabled ? theme.disabled : theme.linkHover)};
  }
`

export const Button: SFC<StyledButtonProps> = memo(({ ref, as, ...props }) => <StyledButton p={3} {...props} />)
