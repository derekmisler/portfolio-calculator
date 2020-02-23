export const phoneFormat = '(999) 999-9999'
export const currencyFormat = '$9'

export const formatPhone = (rawPhone: string | number): string => {
  if (!rawPhone) return ''
  const rawPhoneAsString = String(rawPhone)
  var cleaned = ('' + rawPhoneAsString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return rawPhoneAsString
}

export const formatCurrency = (val: number, whole?: boolean): string => {
  const dollars = Number(val).toFixed(whole ? 0 : 2)
  const formatted = dollars.replace(/\d(?=(\d{3})+\.)/g, '$&,')
  return `$${formatted}`
}

export const formatPercentage = (val: number = 0): string => val ? `${Number(val).toFixed(0)}%` : '0%'
