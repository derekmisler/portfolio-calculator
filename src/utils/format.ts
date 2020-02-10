export const phoneFormat = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
]

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
