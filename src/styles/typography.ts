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
      name: 'Merriweather',
      styles: ['400']
    },
    {
      name: 'Fira Mono',
      styles: ['400', '700&display=swap']
    }
  ],
  headerFontFamily: ['Merriweather', 'serif'],
  bodyFontFamily: ['Fira Mono', 'monospace'],
  baseFontSize: '20px',
  scaleRatio: 2,
  baseLineHeight: 1.5,
  headerLineHeight: 1,
  bodyWeight: 500,
  headerWeight: 400,
  boldWeight: 700,
  bodyColor: theme.body,
  headerColor: theme.header
})

export default TYPOGRAPHY
