import styled, { css } from "styled-components"

const error = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #606377;

  .error {
    &__message {
      font-size: 18px;
      margin-bottom: 0;
    }

    &__icon {
      font-family: "ProximaNovaExtrabold";
      font-size: 32px;
      margin-bottom: 0;
    }
  }
`

export const ErrorStyled = styled.div`
  ${error}
`
