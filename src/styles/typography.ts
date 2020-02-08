import { HTMLProps } from 'react'
import Typography from 'typography'
import { theme } from 'styles'

export type FontStyle = 'italic' | 'normal'
export type BaseFontWeight = '400' | '500' | '700'
export type HeadingFontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '900'

export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  textAlign?: string
  textAlignDesktop?: string
  accent?: boolean
  bold?: boolean
  inline?: boolean
  columns?: number
}

export const TYPOGRAPHY = new Typography({
  includeNormalize: true,
  bodyFontFamily: ['neue-haas-grotesk-text', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
  headerFontFamily: ['neue-haas-grotesk-display', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
  baseFontSize: '2rem',
  scaleRatio: 2,
  baseLineHeight: 1.5,
  headerLineHeight: 1,
  bodyWeight: 500,
  headerWeight: 500,
  boldWeight: 500,
  bodyColor: theme.body,
  headerColor: theme.header
})

export default TYPOGRAPHY
