export const keymirror = <T extends {}>(object: T) => (
  (Object.keys(object) as Array<keyof T>).reduce((obj, key) => {
    obj[key] = key
    return obj
  }, {} as { [P in keyof T]: P })
)
