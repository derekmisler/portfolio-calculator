import { colors } from './colors'

export interface ThemeProps {
  [colorName: string]: string
}

export const theme = {
  colors: {
    body: colors.white[0],
    header: colors.white[0],
    border: colors.white[0],
    accent: colors.accent[0],
    link: colors.accent[2],
    linkHover: colors.accent[3],
    disabled: colors.white[2],
    background: colors.gray[0],
    error: colors.error,
    warning: colors.warning,
    success: colors.success
  }
}
