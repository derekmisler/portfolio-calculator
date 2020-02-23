import React, { SFC } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2,
  allowNegative: true,
  allowLeadingZeroes: false
}

export const CurrencyInput: SFC<{ render?: () => void }> = props => {
  const currencyMask = createNumberMask(defaultMaskOptions)

  return <MaskedInput mask={currencyMask} {...props} />
}
