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
    background-color: white
}
`;

// Títulos de Seções
export const SectionTitle = styled.h2`
  font-size: 25px;
  font-weight: bold
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

export const ProductCardWrapper = styled.div`
  display: flex;
  gap: 31px;
  padding: 19px 20px;
  background-color: rgba(14, 10, 56, 0.05);
  flex-direction: column;

  .container-subtitle{
    width: 350px;
    height: 35px;
    gap: 60px;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: center;
    align-items: center;
  }

`

// Card de Produto
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 181px;
  max-width: 181px;
  height: 248px;
  border-radius: 8px;
  text-align: left;
  gap: 13px; 

  img {
    margin: 0 auto;
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
    width: 142px;
    height: 142px;

    &:hover {
    transform: scale(1.02);
    transition: 0.3s ease-in-out;
  }
  }

  span {
    color: black;
    font-size: 10px;
  }

  p {
    display: flex;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
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