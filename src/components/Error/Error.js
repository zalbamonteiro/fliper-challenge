import { ErrorStyled } from "./ErrorStyle"

export const Error = () => (
  <ErrorStyled>
    <p className="error__message">
      Não foi possível o carregamento do seu resumo.
    </p>
    <p className="error__icon">:(</p>
  </ErrorStyled>
)
