import { render } from "@testing-library/react"
import { CardBody } from "../CardBody"

describe("cardBody component tests", () => {
  test("without props", () => {
    const screen = render(<CardBody />)
    const cardBody = screen.container
    expect(cardBody.firstChild).toHaveTextContent(
      "Não foi possível o carregamento do seu resumo.:("
    )
  })

  test("properties with empty value", () => {
    const obj = {}
    const screen = render(<CardBody {...obj} />)
    const cardBody = screen.container
    expect(cardBody.firstChild).toHaveTextContent(
      "Não foi possível o carregamento do seu resumo.:("
    )
  })

  test("properties with null value", () => {
    const obj = { profitability: null, cdi: null, gain: null, total: null }
    const screen = render(<CardBody {...obj} />)
    const cardBody = screen.container
    expect(cardBody.firstChild).toHaveTextContent(
      "Não foi possível o carregamento do seu resumo.:("
    )
  })

  test("properties with zero value", () => {
    const obj = { profitability: 0, cdi: 0, gain: 0, total: 0 }
    const screen = render(<CardBody {...obj} />)
    const investedLabel = screen.getByTestId("invested-label")
    const investedValue = screen.getByTestId("invested-value")
    const list = screen.getByTestId("list")

    expect(investedValue.textContent).toBe("0")
    expect(investedLabel.textContent).toBe("Valor Investido")

    expect(list.firstChild).toHaveTextContent("0")
    expect(list.firstChild).toHaveTextContent("Rentabilidade/mês")

    expect(list.children[1]).toHaveTextContent("0")
    expect(list.children[1]).toHaveTextContent("CDI")

    expect(list.lastChild).toHaveTextContent("0")
    expect(list.lastChild).toHaveTextContent("Ganho/mês")
  })

  test("properties with number in string format value", () => {
    const obj = {
      profitability: "1.1",
      cdi: "1.2",
      gain: "123.4",
      total: "1234.5",
    }
    const screen = render(<CardBody {...obj} />)
    const investedValue = screen.getByTestId("invested-value")
    const list = screen.getByTestId("list")

    expect(investedValue).toHaveTextContent("1.234,50")
    expect(list.firstChild).toHaveTextContent("1,1%")
    expect(list.children[1]).toHaveTextContent("1,2%")
    expect(list.lastChild).toHaveTextContent("123,40")
  })

  test("properties with string value", () => {
    const obj = { profitability: "AAA", cdi: "AAA", gain: "AAAA", total: "AAA" }
    const screen = render(<CardBody {...obj} />)
    const cardBody = screen.container

    expect(cardBody.firstChild).toHaveTextContent(
      "Não foi possível o carregamento do seu resumo.:("
    )
  })

  test("properties with valid value", () => {
    const obj = { profitability: 1.1, cdi: 1.2, gain: 123.4, total: 1234.5 }
    const screen = render(<CardBody {...obj} />)
    const investedValue = screen.getByTestId("invested-value")
    const list = screen.getByTestId("list")

    expect(investedValue).toHaveTextContent("1.234,50")
    expect(list.firstChild).toHaveTextContent("1,1%")
    expect(list.children[1]).toHaveTextContent("1,2%")
    expect(list.lastChild).toHaveTextContent("123,40")
  })
})
