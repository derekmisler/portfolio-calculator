import { HTMLProps } from 'react'

export type SmMdLgSizes = 'small' | 'medium' | 'large'

export interface SmMdLgTypes {
  small: string
  medium: string
  large: string
}

export interface DesktopMobile {
  desktop: string
  mobile: string
}

export interface StyledComponentProps {
  as?: string
  ref?: any
}

export type FlexAlignment =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'baseline'

export const breakpoints = {
  mobile: '64em',
  desktop: '64.063em'
}

export const transitionDefaults = {
  durationFast: '230ms',
  duration: '500ms',
  property: 'all',
  timing: 'cubic-bezier(.68, -.55, .265, 1.55)'
}
