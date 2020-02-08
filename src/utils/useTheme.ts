import { useState, useEffect } from 'react'
import { themes, ThemeStateProps } from 'styles'

enum ThemeActionTypes {
  Light = 'light',
  Dark = 'dark'
}

type UseThemeProps = [ThemeStateProps, Function]

export const useTheme = (): UseThemeProps => {
  const [isDarkMode, setDarkMode] = useState(true)
  const [theme, setTheme] = useState(themes[ThemeActionTypes.Dark])

  const now = new Date()
  const hour = now.getHours()
  const outsideOfWorkingHours = hour < 9 || hour >= 17

  useEffect(() => {
    setDarkMode(outsideOfWorkingHours)
    setTheme(themes[outsideOfWorkingHours ? ThemeActionTypes.Dark : ThemeActionTypes.Light])
  }, [outsideOfWorkingHours])

  const toggleTheme = (switchToLightMode: boolean) => {
    setDarkMode(!switchToLightMode)
    setTheme(themes[switchToLightMode ? ThemeActionTypes.Light : ThemeActionTypes.Dark])
  }

  return [{ theme, isDarkMode }, toggleTheme]
}
