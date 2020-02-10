export const formatPhone = (rawPhone: string | number): string => {
  if (!rawPhone) return ''
  const rawPhoneAsString = String(rawPhone)
  const cleaned = rawPhoneAsString.replace(/\D/g, '')
  const zip = cleaned.substring(0, 3)
  const middle = cleaned.substring(3, 6)
  const last = cleaned.substring(6, 10)

  let result = ''
  if (cleaned.length > 6) {
    result = `(${zip}) ${middle}-${last}`
  } else if (cleaned.length > 3) {
    result = `(${zip}) ${middle}`
  } else if (cleaned.length > 0) {
    result = `(${zip}`
  }
  return result
}
