import { HTMLProps } from 'react'
import Typography from 'typography'
import { theme } from './theme'

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
  googleFonts: [
    {
      name: 'Roboto Condensed',
      styles: ['700']
    },
    {
      name: 'Roboto Mono',
      styles: ['400', '700&display=swap']
    }
  ],
  headerFontFamily: ['Roboto Condensed', 'sans-serif'],
  bodyFontFamily: ['Roboto Mono', 'monospace'],
  baseFontSize: '20px',
  scaleRatio: 3,
  baseLineHeight: 1.5,
  headerLineHeight: 1,
  bodyWeight: 400,
  boldWeight: 700,
  headerWeight: 700,
  bodyColor: theme.body,
  headerColor: theme.header
})

export default TYPOGRAPHY
