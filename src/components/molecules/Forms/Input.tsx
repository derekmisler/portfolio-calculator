import { RefObject, FormEvent, FC, useEffect, useRef, memo } from 'react'
import styled from 'styled-components'
import { Text, Span } from 'components/atoms/Typography'
import { LAYOUT, BUTTON_TEXT_STYLES, red, green } from 'styles'

const { borderSize, borderStyle, spacing } = LAYOUT

interface InputProps {
  label?: string
  id: string
  onChange: Function
  defaultValue?: string
  placeholder?: string
  autoFocus?: boolean
}

const InputWrapper = styled.div`
  display: block;
  width: 100%;
`

const TextInput = styled.input<{ valid?: boolean; invalid?: boolean }>`
  ${BUTTON_TEXT_STYLES}
  margin: 0;
  display: block;
  width: 100%;
  position: relative;
  appearance: none;
  outline: none;
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom-style: ${borderStyle};
  border-bottom-width: ${borderSize};
  border-bottom-color: ${({ valid, invalid, theme }) => {
    if (valid) return green
    if (invalid) return red
    return theme.border
  }};
  overflow: hidden;
  &:hover,
  &:focus {
    border-bottom-color: ${({ theme }) => theme.link};
  }
`

export const Input: FC<InputProps> = memo(
  ({ label, onChange, defaultValue, id, autoFocus, placeholder }) => {
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
      const { currentTarget: { value = '' } = {} } = e || {}
      onChange(value)
    }
    const inputRef: RefObject<HTMLInputElement> = useRef(null)
    useEffect(() => {
      if (autoFocus) {
        inputRef?.current?.focus()
      }
    }, [])
    return (
      <InputWrapper>
        {label && (
          <Text as="label" htmlFor={id}>
            <Span small>{label}</Span>
          </Text>
        )}
        <TextInput
          placeholder={placeholder}
          ref={inputRef}
          id={id}
          type="text"
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      </InputWrapper>
    )
  }
)
