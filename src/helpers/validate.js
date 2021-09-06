const isNumberValue = (val) => Number.isNaN(parseFloat(val))

export const isUndefined = (val) => !val && val !== 0

const isNotValidNumbers = (val) => isUndefined(val) || isNumberValue(val)

export const isNotValidProps = (arrayProps) => {
  if (arrayProps.length === 0) {
    return true
  }

  const result = arrayProps
    .map((item) => isNotValidNumbers(item))
    .reduce((isValid, item) => item || isValid, false)

  return result
}
