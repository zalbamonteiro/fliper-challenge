import styled, { css } from "styled-components"

const list = css`
  list-style: none;
  padding: 0px;
  margin: 0px;
`

const listItem = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #606377;

  .listItem__text {
    margin-top: 0;
    margin-bottom: 6px;
  }

  .listItem__value {
    font-family: "ProximaNovaExtrabold";
    color: #3b5cb8;
    font-size: 18px;
    font-weight: bolder;
  }
`

export const ListStyle = styled.ul`
  ${list}
`

export const ListItemStyle = styled.li`
  ${listItem}
`
