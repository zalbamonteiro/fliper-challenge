const toFixed = (value, fixed) => {
  const result = new RegExp(`^-?\\d+(?:.\\d{0,${fixed || -1}})?`)

  if (Number.isNaN(parseFloat(value))) {
    return undefined
  }

  return value.toString().match(result)[0]
}

const addPercentage = (value, numberFixed) => {
  const result = toFixed(value, numberFixed)
  if (result) {
    return `${result.toString().replace(".", ",")}%`
  }

  return undefined
}

export const withPercentage = (val, numberFixed) =>
  val && addPercentage(parseFloat(val), numberFixed)
