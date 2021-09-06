import { withPercentage } from "../percentage"

describe("percentage helper tests", () => {
  test("empty value in parameters", () => {
    expect(withPercentage()).toBeUndefined()
  })

  test("string value in parameter value and and empty value in fixed parameter", () => {
    expect(withPercentage("AAA")).toBeUndefined()
  })

  test("integer value in parameter value and empty value in fixed parameter", () => {
    expect(withPercentage(10)).toEqual("10%")
  })

  test("float value in parameter value and integer value in fixed parameter", () => {
    expect(withPercentage(10.0, 2)).toEqual("10%")
  })

  test("float value in parameter value with fractional number and integer value in fixed parameter", () => {
    expect(withPercentage(10.99, 2)).toEqual("10,99%")
  })
})
