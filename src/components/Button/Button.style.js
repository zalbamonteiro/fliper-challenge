import styled, { css } from "styled-components"

const button = css`
  box-shadow: 1px 1px 1px #00000029;
  cursor: pointer;
  width: 103px;
  height: 32px;
  font-size: 16px;
  text-transform: uppercase;
  font-family: "ProximaNovaBold";
  background-color: #3b5cb8;
  color: #ffffff;
  border: none;
  border-radius: 8px;
`

const buttoOutline = css`
  border: 1px solid #3b5cb8;
  background-color: #ffffff;
  color: #3b5cb8;
`

const buttonCircle = css`
  border-radius: 25px;
`

const Button = styled.button`
  ${button}
  ${(props) => props.outline && buttoOutline}
  ${(props) => props.circle && buttonCircle}
`

export { Button }
