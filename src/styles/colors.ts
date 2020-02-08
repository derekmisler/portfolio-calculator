import { hexToRgba } from 'utils/hexToRgba'

export interface ThemeProps {
  [colorName: string]: string
}

export const colors = {
  gray: '#4C566A',
  black: '#2E3440',
  blackDarker: '#000000',
  transparentBlack: hexToRgba('#000000', 0.6),
  white: '#f4f1ec' ,
  whiteDarker: '#E5E9F0',
  transparentWhite: hexToRgba('#ffffff', 0.6),
  red: '#BF616A',
  redDarker: '#9b4b56',
  blue: '#81A1C1',
  blueDarker: '#5E81AC',
}

export const theme = {
  colors,
  body: colors.white,
  header: colors.white,
  border: colors.white,
  accent: colors.red,
  link: colors.blue,
  linkHover: colors.blueDarker,
  disabled: colors.gray,
  background: colors.black,
  transparentBackground: colors.transparentBlack,
  shadow: colors.blackDarker,
}
