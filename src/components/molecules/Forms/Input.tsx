import React, { RefObject, SFC, useEffect, useRef, memo } from 'react'
import { useField } from 'formik'
import MaskedInput from 'react-text-mask'
import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps, border, BorderProps } from 'styled-system'
import { Text, Span, Alert } from 'atoms/Typography'
import { phoneFormat } from 'utils/format'
import { INPUT_TYPES } from 'constants/inputTypes'

interface InputProps extends SpaceProps, LayoutProps, BorderProps {
  label?: string
  id?: string
  name: string
  type?: string | 'text'
  autoFocus?: boolean
  placeholder?: string
}

const StyledInput = styled.input.attrs<{ mask?: any }>(({ mask }) => ({
  as: mask ? MaskedInput : 'input'
}))<InputProps>`
  ${layout}
  ${space}
  ${border}
  display: block;
  width: 100%;
  border-radius: 0;
  outline: none;
  color: ${({ theme }) => theme.colors.body};
  background-color: transparent;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  box-shadow: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.body};
  }
`

export const Input: SFC<InputProps> = memo(({ label, autoFocus, type, height, size, width, ...props }) => {
  const [field, meta] = useField({ type, ...props })
  const invalid = !!(meta.touched && meta.error)
  const ref: RefObject<HTMLInputElement> = useRef(null)

  let mask
  switch (type) {
    case INPUT_TYPES.tel:
      mask = phoneFormat
  }
  const componentProps = mask
    ? { ref, type, mask, guide: false }
    : { ref, type }

  useEffect(() => {
    if (autoFocus) ref?.current?.focus()
  }, [])

  return (
    <>
      {label && (
        <Text as='label' htmlFor={props.id || props.name}>
          <Span small>
            { invalid ? <Alert>{meta.error}</Alert> : label }
          </Span>
        </Text>
      )}
      <StyledInput
        {...componentProps}
        {...field}
        {...props}
        id={props.id || props.name}
        width={1}
        borderBottomWidth={3}
        borderBottomColor={invalid ? 'error' : 'border'}
       />
    </>
  )
})
