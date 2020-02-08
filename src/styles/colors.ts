import { hexToRgba } from 'utils/hexToRgba'

export interface ThemeProps {
  [colorName: string]: string
}
export interface ThemeStateProps {
  theme: ThemeProps
  isDarkMode: boolean
}

const gray: string = '#4C566A'
const black: string = '#2E3440'
const blackDarker: string = '#000000'
const transparentBlack: string = hexToRgba(black, .6)

const white: string = '#f4f1ec'
const whiteDarker: string = '#E5E9F0'
const transparentWhite: string = hexToRgba(white, .6)

const red: string = '#BF616A'
const redDarker: string = '#9b4b56'
const blue: string = '#81A1C1'
const blueDarker: string = '#5E81AC'

export const themes = {
  light: {
    text: gray,
    border: gray,
    accent: blueDarker,
    link: redDarker,
    linkHover: red,
    disabled: gray,
    background: white,
    transparentBackground: transparentWhite,
    shadow: transparentBlack
  },
  dark: {
    text: white,
    border: white,
    accent: red,
    link: blue,
    linkHover: blueDarker,
    disabled: gray,
    background: black,
    transparentBackground: transparentBlack,
    shadow: blackDarker
  }
}
