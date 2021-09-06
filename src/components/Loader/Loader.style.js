import styled, { css } from "styled-components"

const loader = css`
  color: #606377;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`

const spinner = css`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 16px solid #f3f3f3;
  border-top: 16px solid #3b5cb8;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
  color: #606377;
  font-size: 18px;
`

export const LoaderStyle = styled.div`
  ${loader}
`

export const SpinnerStyle = styled.div`
  ${spinner}
`
