import styled from "styled-components";
import {createGlobalStyle} from "styled-components";



export const GlobalStyles = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

}


body{
    font-family: 'Arial', sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    margin: auto;
    background-color: white
}

`;

// Banner


// Títulos de Seções
export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0;
  text-align: center;
  color: #191847;
`;

// Grid de Produtos
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// Card de Produto
export const ProductCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: #00c853;
  }

  &:hover {
    transform: scale(1.02);
    transition: 0.3s ease-in-out;
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