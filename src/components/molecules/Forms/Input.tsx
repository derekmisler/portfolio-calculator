import React, { RefObject, SFC, useEffect, useRef, memo, HTMLProps, ChangeEvent } from 'react'
import { useField } from 'formik'
import styled from 'styled-components'
import { typography, TypographyProps, space, SpaceProps, border, BorderProps } from 'styled-system'
import { Text, Span, Alert } from 'atoms/Typography'

interface StyledInputProps extends SpaceProps, BorderProps, TypographyProps {}

interface InputProps extends StyledInputProps, HTMLProps<HTMLInputElement> {
  label?: string
  id?: string
  name: string
  type?: string | 'text'
  autoFocus?: boolean
  placeholder?: string
  handleChange?: (v: any) => void
}
const StyledInput = styled.input<StyledInputProps>`
  ${space}
  ${border}
  ${typography}
  display: block
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

export const Input: SFC<InputProps> = memo(
  ({ ref: innerRef, as, label, autoFocus, handleChange, ...props }) => {
    const [field, meta] = useField(props)
    const invalid = !!(meta.touched && meta.error)
    const ref: RefObject<HTMLInputElement> = useRef(null)

    useEffect(() => {
      if (autoFocus) ref?.current?.focus()
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      field.onChange(e)
      if (handleChange) handleChange({ [e?.target?.name]: e?.target?.value })
    }

    return (
      <>
        {label && (
          <Text as='label' htmlFor={props.id || props.name}>
            <Span small>{invalid ? <Alert>{meta.error}</Alert> : label}</Span>
          </Text>
        )}
        <StyledInput
          {...field}
          {...props}
          id={props.id || props.name}
          onChange={onChange}
          borderBottomWidth={1}
          borderBottomColor={invalid ? 'error' : 'border'}
        />
      </>
    )
  }
)
