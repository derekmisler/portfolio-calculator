import styled, { css } from 'styled-components'
import { TYPOGRAPHY, LAYOUT, BUTTON_TEXT_STYLES } from 'styles'

const { baseFontSize } = TYPOGRAPHY

const { spacing, borderRadius, borderStyle, borderSize, mediaQueries } = LAYOUT

interface StyledButtonProps {
  accent?: boolean
  href?: string
  tab?: boolean
  selected?: boolean
}

const tabStyle = css`
  border: none;
  border-radius: 0;
  border-bottom: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
`
const buttonStyle = css`
  border-radius: ${borderRadius};
  border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
`

export const Button = styled.button.attrs<StyledButtonProps>(({ href }) => ({
  as: href ? 'a' : 'button',
}))<StyledButtonProps>`
  ${BUTTON_TEXT_STYLES}
  ${({ tab }) => (tab ? tabStyle : buttonStyle)}
  background-color: transparent;
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, disabled, selected }) => {
    if (disabled) return theme.disabled
    if (selected) return theme.active
    return theme.link
  }};
  border-color: ${({ theme, disabled, selected }) => {
    if (disabled) return theme.disabled
    if (selected) return theme.active
    return theme.link
  }};
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
    color: ${({ theme, disabled }) =>
      disabled ? theme.disabled : theme.background};
    background-color: ${({ theme, disabled }) =>
      disabled ? 'transparent' : theme.linkHover};
    border-color: ${({ theme, disabled }) =>
      disabled ? theme.disabled : theme.linkHover};
  }
`
