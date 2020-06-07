import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 380px;
  background: #EEE;
  padding: 1rem 1rem 25%;
`