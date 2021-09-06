import { render } from "@testing-library/react"
import { List } from "../List"

describe("list component tests", () => {
  test("properties with empty array listItens", () => {
    const screen = render(<List listItens={[]} />)
    const list = screen.getByTestId("list")
    expect(list.children).toHaveLength(0)
  })

  test("properties with empty props values on array listItens", () => {
    const array = [{ val: 0 }]
    const screen = render(<List listItens={array} />)
    const list = screen.getByTestId("list")
    expect(list.firstChild).toBeNull()
  })

  test("properties with zero value on array listItens", () => {
    const listItens = [
      {
        text: "Rentabilidade/mês",
        value: 0,
      },
      {
        text: "CDI",
        value: 0,
      },
    ]

    const screen = render(<List listItens={listItens} />)
    const list = screen.getByTestId("list")
    expect(list.firstChild).toHaveTextContent("Rentabilidade/mês")
    expect(list.firstChild).toHaveTextContent("0")
  })

  test("properties without value on array listItens", () => {
    const listItens = [
      {
        text: "Rentabilidade/mês",
      },
      {
        text: "CDI",
      },
    ]

    const screen = render(<List listItens={listItens} />)
    const list = screen.getByTestId("list")
    expect(list.firstChild).toBeNull()
  })

  test("properties with zero value on array listItens", () => {
    const listItens = [
      {
        text: "Rentabilidade/mês",
        value: 1.1,
      },
      {
        text: "CDI",
        value: 1.2,
      },
    ]

    const screen = render(<List listItens={listItens} />)
    const list = screen.getByTestId("list")
    expect(list.firstChild).toHaveTextContent("Rentabilidade/mês")
    expect(list.firstChild).toHaveTextContent("1.1")
    expect(list.children[1]).toHaveTextContent("CDI")
    expect(list.children[1]).toHaveTextContent("1.2")
  })
})
