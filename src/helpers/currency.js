const currencyBR = (value) => {
  const formatt = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  }

  if (Number.isNaN(parseFloat(value))) {
    return undefined
  }

  return value.toLocaleString("pt-BR", formatt)
}

export const withCurrency = (val) => val && currencyBR(parseFloat(val))
