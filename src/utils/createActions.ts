export const createActions = (prefix: string) => (
  {
    REQUEST: `${prefix.toUpperCase()}_REQUEST`,
    SUCCESS: `${prefix.toUpperCase()}_SUCCESS`,
    FAILURE: `${prefix.toUpperCase()}_FAILURE`,
  }
)

export const keymirror = (object: {}, prefix?: string) => (
  (Object.keys(object)).reduce((obj, key) => {
    obj[key] = prefix ? `${prefix}_${key}` : key.toString()
    return obj
  }, {} as { [key: string]: string })
)
