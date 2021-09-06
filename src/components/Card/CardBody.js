import { CardBodyStyle } from "./Card.style"
import { List } from "../List"
import { Error } from "../Error"
import { withCurrency, withPercentage, isNotValidProps } from "../../helpers"

export const CardBody = ({ profitability, cdi, gain, total }) => {
  if (isNotValidProps([profitability, cdi, gain, total])) {
    return <Error />
  }

  const listItens = [
    {
      text: "Rentabilidade/mês",
      value: withPercentage(profitability, 3),
    },
    {
      text: "CDI",
      value: withPercentage(cdi, 2),
    },
    {
      text: "Ganho/mês",
      value: withCurrency(gain),
    },
  ]

  return (
    <CardBodyStyle>
      <h5 className="body__title" data-testid="invested-label">
        Valor Investido
      </h5>
      <h6
        className="body__title body__title--value"
        data-testid="invested-value"
      >
        {withCurrency(total)}
      </h6>
      <List listItens={listItens} />
    </CardBodyStyle>
  )
}
