import styled, { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

}


body{
    font-family: "Jockey One", sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    margin: auto;
    background-color: white;
}

`;
// Rodapé
export const Footer = styled.footer`
  text-align: center;
  background-color: #191847;
  color: white;
  padding: 10px 0;

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;