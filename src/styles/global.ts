import { createGlobalStyle } from "styled-components";

// estilizaçao global com styled components
export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${(props) => props.theme.background} ;
    height: 100vh;
}

body, input, textarea, button {
  font-family: "Baloo 2", sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

`;
