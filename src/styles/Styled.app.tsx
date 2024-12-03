import { createGlobalStyle } from "styled-components";



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

    a{
        text-decoration: none;
    }
}

`;
