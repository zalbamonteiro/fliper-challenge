import { isUndefined, isNotValidProps } from "../validate"

describe("validate helper tests", () => {
  test("empty value in parameter in isUndefined function", () => {
    expect(isUndefined()).toBeTruthy()
  })

  test("with undefined value in parameter in isUndefined function", () => {
    let value
    expect(isUndefined(value)).toBeTruthy()
  })

  test("with numer value in parameter in isUndefined function", () => {
    const value = 1
    expect(isUndefined(value)).toBeFalsy()
  })

  test("with zero value in parameter in isUndefined function", () => {
    const value = 0
    expect(isUndefined(value)).toBeFalsy()
  })

  test("with string value in parameter in isUndefined function", () => {
    const value = "teste"
    expect(isUndefined(value)).toBeFalsy()
  })

  test("with empty array value in parameter in isNotValidProps function", () => {
    const value = []
    expect(isNotValidProps(value)).toBeTruthy()
  })

  test("with array with number values in parameter in isNotValidProps function", () => {
    const value = ["1", 2, 3]
    expect(isNotValidProps(value)).toBeFalsy()
  })

  test("with array with string value in parameter in isNotValidProps function", () => {
    const value = ["1", "AAA", 3]
    expect(isNotValidProps(value)).toBeTruthy()
  })
})
