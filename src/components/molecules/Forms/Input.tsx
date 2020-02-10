import React, { RefObject, FormEvent, FC, useEffect, useRef, memo } from 'react'
import { Text, Span } from 'atoms/Typography'

interface InputProps {
  label?: string
  id: string
  onChange: Function
  defaultValue?: string
  value?: string
  placeholder?: string
  autoFocus?: boolean
}

export const Input: FC<InputProps> = memo(
  ({ label, onChange, defaultValue, value, id, autoFocus, placeholder }) => {
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
      <>
        {label && (
          <Text as='label' htmlFor={id}>
            <Span small>{label}</Span>
          </Text>
        )}
        <input
          placeholder={placeholder}
          ref={inputRef}
          id={id}
          type='text'
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
        />
      </>
    )
  }
)
