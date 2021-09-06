import { ReactComponent as Icon } from "../../assets/icons/icon-menu.svg"
import { CardHeaderStyle } from "./Card.style"

const CardHeader = () => (
  <CardHeaderStyle>
    <h2 className="header__title">Seu Resumo</h2>
    <span className="header__icon">
      <Icon />
    </span>
  </CardHeaderStyle>
)

export { CardHeader }
