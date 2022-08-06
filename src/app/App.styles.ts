import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: white;
  } 

  .actionBtn {
    font-weight: bold;
    padding: 8px;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 4px;
    opacity: 0.8;
  }

  .actionBtn:hover {
    opacity: 1;
  }

`;

