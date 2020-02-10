export const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validatePhone = (phone: string | number): boolean => String(phone).replace(/\D/g, '').length === 10
export const validateEmail = (email: string): boolean => {
  return emailPattern.test(email)
}
