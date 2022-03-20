import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  input, button {
    font-family: 'Open Sans', sans-serif;
  }
  button {
    cursor: pointer;
  }
  div {
    display: flex;
  }
`;
