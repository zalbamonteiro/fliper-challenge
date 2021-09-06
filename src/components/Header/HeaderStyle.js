import styled, { css } from "styled-components"

const header = css`
  height: 80px;
  box-shadow: 0px 1px 12px 0px #9aa3bc;
  background-color: #3b5cb8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const HeaderStyle = styled.header`
  ${header}

  .header {
    &__logo {
      height: 100%;
      width: 145px;
      display: flex;
      align-items: center;
      padding-left: 30px;

      h1 {
        padding: 0;
        margin: 0;
      }

      img {
        padding-top: 6px;
        max-width: 100%;
      }
    }

    &__user {
      select {
        font-family: "ProximaNovaBold";
        height: 36px;
        border-radius: 6px;
        padding: 0 18px;
        margin-right: 6px;
        background-color: #ffffff;
        color: #3b5cb8;
      }
    }
  }
`
