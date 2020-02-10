import React, { RefObject, SFC, useEffect, useRef, memo } from 'react'
import { useField } from 'formik'
import MaskedInput from 'react-text-mask'
import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps, border, BorderProps } from 'styled-system'
import { Text, Span, Alert } from 'atoms/Typography'
import { phoneFormat } from 'utils/format'
import { InputTypes } from 'constants/inputTypes'
import { LAYOUT } from 'styles'

const { borderStyle, borderSizeSmall } = LAYOUT

interface InputProps {
  label?: string
  id?: string
  name: string
  type?: string | 'text'
  autoFocus?: boolean
  placeholder?: string
}

interface StyledInputProps extends SpaceProps, LayoutProps, BorderProps {}

const StyledInput = styled.input.attrs<{ mask?: any }>(({ mask }) => ({
  as: mask ? MaskedInput : 'input'
}))<StyledInputProps>`
  ${layout}
  ${space}
  ${border}
  display: block;
  width: 100%;
  color: ${({ theme }) => theme.body};
  background-color: transparent;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom-width: ${borderSizeSmall};
  border-bottom-style: ${borderStyle};
  &::placeholder {
    color: ${({ theme }) => theme.body};
  }
`

export const Input: SFC<InputProps> = memo(({ label, autoFocus, type, ...props }) => {
  const [field, meta] = useField({ type, ...props })
  const invalid = !!(meta.touched && meta.error)
  const ref: RefObject<HTMLInputElement> = useRef(null)

  let mask
  switch (type) {
    case InputTypes.tel:
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
          <Span small>{label}</Span>
        </Text>
      )}
      <StyledInput
        width={1}
        mb={2}
        borderBottomColor={invalid ? 'error' : 'border'}
        {...componentProps}
        {...field}
        {...props}
       />
      {invalid ? <Alert>{meta.error}</Alert> : null}
    </>
  )
})
