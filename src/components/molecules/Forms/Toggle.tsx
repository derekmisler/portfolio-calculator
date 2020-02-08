import { useState, useEffect, HTMLProps, FC } from 'react'
import styled from 'styled-components'
import { Text } from 'components/atoms/Typography'
import { DEFAULT_TEXT_STYLES, LAYOUT } from 'styles'

const {
  borderSize,
  borderStyle,
  borderRadius,
  spacing,
  transitionDefaults: { timing, duration },
} = LAYOUT

interface ToggleProps extends HTMLProps<HTMLInputElement> {
  onLabel?: string
  offLabel?: string
  onToggle: Function
  defaultChecked?: boolean
}

const ToggleWrapper = styled.button`
  ${DEFAULT_TEXT_STYLES}
  border: 0;
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${spacing.small} ${spacing.medium};
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.transparentBackground};
  outline: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    cursor: pointer;
  }
`

const ToggleSlider = styled.div<{ isActive?: boolean }>`
  height: ${borderSize};
  width: ${borderSize};
  border-radius: ${borderRadius};
  padding: 0;
  margin: 0 ${spacing.small};
  position: relative;
  appearance: none;
  outline: none;
  background-color: transparent;
  overflow: hidden;
  border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};

  &::before {
    content: '';
    position: absolute;
    height: ${borderSize};
    width: calc(${borderSize} + ${borderSize});
    border-radius: ${borderRadius};
    background-color: ${({ theme }) => theme.link};
    transition: ${timing} left ${duration};
    left: ${({ isActive }) =>
      isActive ? `calc(100% - (${borderSize} + ${borderSize}))` : 0};
    will-change: left;
    top: 0;
  }
`

export const Toggle: FC<ToggleProps> = ({
  onLabel,
  offLabel,
  onToggle,
  defaultChecked,
}) => {
  const [active, setActive] = useState(defaultChecked)
  const handleChange = () => {
    setActive(!active)
  }
  useEffect(() => {
    onToggle(active)
  }, [active])
  return (
    <ToggleWrapper onClick={handleChange}>
      {offLabel && <Text>{offLabel}</Text>}
      <ToggleSlider isActive={active} />
      {onLabel && <Text>{onLabel}</Text>}
    </ToggleWrapper>
  )
}
