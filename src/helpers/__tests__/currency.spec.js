import { withCurrency } from "../currency"

describe("currency helper tests", () => {
  test("empty value in parameter", () => {
    expect(withCurrency()).toBeUndefined()
  })

  test("string value in parameter", () => {
    expect(withCurrency("AAA")).toBeUndefined()
  })

  test("zero value in parameter", () => {
    expect(withCurrency(0)).toBe(0)
  })

  test("integer value in parameter", () => {
    expect(withCurrency(10)).toContain("R$")
    expect(withCurrency(10)).toContain("10,00")
  })

  test("float value in parameter", () => {
    expect(withCurrency(10.99)).toContain("R$")
    expect(withCurrency(10.99)).toContain("10,99")
  })
})
