export const hexToRgba = (hex: string, opacity: number = 1) => {
  const hexCode = (hex || '').replace('#', '')
  const realOpacity = opacity > 1 ? opacity / 100 : opacity
  const [r, g, b]: number[] = (hexCode.match(/.{1,2}/g) || []).map(val => parseInt(val, 16))
  return `rgba(${r}, ${g}, ${b}, ${realOpacity})`
}
