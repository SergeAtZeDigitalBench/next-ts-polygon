export const isServer = () => typeof window === 'undefined'

export const isNullOrUndefined = <T = unknown>(
  value: T | null | undefined
): value is null | undefined => {
  return typeof value === 'undefined' || value === null
}

export const isEmpty = <T = unknown>(value: T): boolean => {
  if (
    typeof value === 'function' ||
    value instanceof Date ||
    typeof value === 'number'
  ) {
    return false
  }

  if (isNullOrUndefined(value)) return true

  if (typeof value === 'string') {
    return value.length === 0
  }

  if (typeof value === 'object' && !isNullOrUndefined(value)) {
    return Object.keys(value).length === 0
  }

  return false
}
