import { HTMLProps } from 'react'
import styled from 'styled-components'
import { TYPOGRAPHY } from 'styles'

const { boldFontWeight, smallFontSize } = TYPOGRAPHY

export interface SpanProps extends HTMLProps<HTMLSpanElement> {
  bold?: boolean
  small?: boolean
}

export const Span = styled.span.attrs<SpanProps>(({ bold, small }) => {
  let as = 'span'
  if (bold) as = 'strong'
  if (small) as = 'small'
  return { as }
})<SpanProps>`
  display: inline;
  font-weight: ${({ bold }) => (bold ? boldFontWeight : undefined)};
  font-size: ${({ small }) => (small ? smallFontSize : undefined)};
`
