import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { keymirror } from 'utils/createActions'

export const INPUT_TYPES = keymirror({
  button: '',
  checkbox: '',
  currency: '',
  color: '',
  date: '',
  email: '',
  file: '',
  hidden: '',
  image: '',
  month: '',
  number: '',
  password: '',
  radio: '',
  range: '',
  reset: '',
  search: '',
  submit: '',
  tel: '',
  text: '',
  time: '',
  url: '',
  week: ''
})

export const CURRENCY_MASK = createNumberMask({
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2,
  allowNegative: true,
  allowLeadingZeroes: false
})
