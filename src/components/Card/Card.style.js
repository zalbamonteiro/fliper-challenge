import styled, { css } from "styled-components"

const cardHeader = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const cardBody = css`
  padding-top: 35px;
`

const bodyTitle = css`
  text-align: center;
  padding: 0px;
  margin: 0px;
`

const cardFooter = css`
  border-top: 1px solid #e5e8ee;
  margin-top: 22px;
  padding-top: 22px;
  display: flex;
  justify-content: flex-end;
`

const CardStyle = styled.div`
  width: 344.5px;
  background-color: #ffffff;
  box-shadow: 1px 1px 1px #9aa3bc;
  border-radius: 16px;
  padding: 23px;
  margin: 10px;
`

const CardHeaderStyle = styled.div`
  ${cardHeader}

  .header {
    &__title {
      font-family: "ProximaNovaExtrabold";
      color: #3b5cb8;
      font-size: 25px;
      letter-spacing: 0.75px;
      padding: 0px;
      margin: 0px;
    }

    &__icon {
      padding: 0px;
      margin: 0px;
    }
  }
`

const CardBodyStyle = styled.div`
  ${cardBody}

  .body {
    &__title {
      ${bodyTitle}

      color: #606377;
      font-size: 16px;
      padding-bottom: 7px;

      &--value {
        font-family: "ProximaNovaExtrabold";
        color: #3b5cb8;
        font-size: 22px;
        padding-bottom: 34px;
      }
    }
  }
`

const CardFooterStyle = styled.div`
  ${cardFooter}
`

export { CardStyle, CardHeaderStyle, CardBodyStyle, CardFooterStyle }
