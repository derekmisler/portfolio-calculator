import { hexToRgba } from 'utils/hexToRgba'

export interface ThemeProps {
  [colorName: string]: string
}

const gray: string = '#4C566A'
const black: string = '#2E3440'
const blackDarker: string = '#000000'
const transparentBlack: string = hexToRgba(black, 0.6)

const white: string = '#f4f1ec'
const whiteDarker: string = '#E5E9F0'
const transparentWhite: string = hexToRgba(white, 0.6)

const red: string = '#BF616A'
const redDarker: string = '#9b4b56'
const blue: string = '#81A1C1'
const blueDarker: string = '#5E81AC'

export const theme = {
  body: white,
  header: white,
  border: white,
  accent: red,
  link: blue,
  linkHover: blueDarker,
  disabled: gray,
  background: black,
  transparentBackground: transparentBlack,
  shadow: blackDarker,
}
