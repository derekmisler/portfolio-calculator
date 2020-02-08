import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, BUTTON_TEXT_STYLES } from 'styles'

export const Link = styled.a.attrs(({ href }) => ({
  as: href ? 'a' : 'button',
}))<{ small?: boolean }>`
  ${({ small }) => (small ? DEFAULT_TEXT_STYLES : BUTTON_TEXT_STYLES)};
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.linkHover};
  }
`
