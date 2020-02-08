import { HTMLProps } from 'react'
import { css } from 'styled-components'
import { LAYOUT } from './layout'

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

export const BASE_MEASURE = 16
const HEADING_SIZES = new Array(6)

export const TYPOGRAPHY = {
  baseFontFamily: 'neue-haas-grotesk-text, "Helvetica Neue", Helvetica, sans-serif;',
  headingFontFamily: 'neue-haas-grotesk-display, "Helvetica Neue", Helvetica, sans-serif;',
  htmlFontSize: `${BASE_MEASURE}px`,
  baseFontSize: {
    desktop: '2rem',
    mobile: '1.5rem'
  },
  smallFontSize: {
    desktop: '1.5rem',
    mobile: '1.2rem'
  },
  buttonFontSize: {
    desktop: '1.35rem',
    mobile: '1rem'
  },
  baseLetterSpacing: '0.00938em',
  baseLineHeight: 1.5,
  smallLineHeight: 1.5,
  baseFontWeight: '500',
  boldFontWeight: '500',
  baseFontStyle: 'normal',
  accentFontStyle: 'normal',
  headingLeftMargin: {
    mobile: ['-.275rem', '-.08rem'],
    desktop: ['-.45rem', '-.25rem', '-.125rem', '-.125rem']
  },
  headingFontSizes: {
    mobile: ['6rem', '3.75rem', '3rem', '2.125rem', '1.5rem', '1rem'],
    desktop: ['9.75rem', '7.5rem', '5rem', '3rem', '2rem', '1.5rem']
  },
  headingLineHeights: [.75, .85, .9, .85, .9, .9],
  headingLetterSpacing: ['-0.01562em', '-0.00833em', '0em', '0.00735em', '0em', '0.0075em'],
  headingFontWeights: HEADING_SIZES.fill('600'),
  minColWidth: `${BASE_MEASURE}ch`
}

export const DEFAULT_TEXT_STYLES = css`
  font: unset;
  font-family: ${TYPOGRAPHY.baseFontFamily};
  font-size: ${TYPOGRAPHY.baseFontSize.mobile};
  font-style: ${TYPOGRAPHY.baseFontStyle};
  line-height: ${TYPOGRAPHY.baseLineHeight};
  font-weight: ${TYPOGRAPHY.baseFontWeight};
  letter-spacing: ${TYPOGRAPHY.baseLetterSpacing};
  text-align: left;
  @media ${LAYOUT.mediaQueries.desktop} {
    font-size: ${TYPOGRAPHY.baseFontSize.desktop};
  }
`
