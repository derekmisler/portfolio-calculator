import React, { RefObject, SFC, useEffect, useRef, memo, HTMLProps, ChangeEvent } from 'react'
import { useField } from 'formik'
import styled from 'styled-components'
import { typography, TypographyProps, space, SpaceProps, border, BorderProps } from 'styled-system'
import { Text, Span, Alert } from 'atoms/Typography'
import { INPUT_TYPES, CURRENCY_MASK } from 'constants/inputTypes'
import MaskedInput from 'react-text-mask'

interface StyledInputProps extends SpaceProps, BorderProps, TypographyProps {
  isCurrency?: boolean
}

interface InputProps extends StyledInputProps, HTMLProps<HTMLInputElement> {
  label?: string
  id?: string
  name: string
  ref?: any
  type?: string | 'text'
  autoFocus?: boolean
  currency?: boolean
  placeholder?: string
  handleChange?: (v: any) => void
}
const StyledInput = styled.input.attrs<StyledInputProps>(({  }) => ({
}))<StyledInputProps>`
  ${space}
  ${border}
  ${typography}
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

export const Input: SFC<InputProps> = memo(
  ({ ref: falseRef, as, label, autoFocus, handleChange, type, ...props }) => {
    const [field, meta] = useField(props)
    const invalid = !!(meta.touched && meta.error)
    const ref: RefObject<HTMLInputElement> = useRef(null)
    const isCurrency = type === INPUT_TYPES.currency

    useEffect(() => {
      if (autoFocus) ref?.current?.focus()
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      field.onChange(e)
      const { value, name } = e?.target || {}
      if (handleChange) handleChange({ [name]: value })
    }

    const inputProps = {
      ...field,
      ...props,
      id: props.id || props.name,
      ref,
      type,
      onChange,
      isCurrency,
      borderBottomWidth: 1,
      borderBottomColor: invalid ? 'error' : 'border'
    }

    return (
      <>
        {label && (
          <Text as='label' htmlFor={props.id || props.name}>
            <Span small>{invalid ? <Alert>{meta.error}</Alert> : label}</Span>
          </Text>
        )}
        { isCurrency
          ? <MaskedInput mask={CURRENCY_MASK} showMask={false} render={innerRef => <StyledInput {...inputProps} ref={innerRef as any} />} />
          : <StyledInput {...inputProps} />
        }
      </>
    )
  }
)
