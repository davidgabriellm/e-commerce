import styled from "styled-components";


// Títulos de Seções
export const SectionTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

// Grid de Produtos


export const ProductCardWrapper = styled.main`
  display: flex;
  background-color: rgba(14, 10, 56, 0.05);
  flex-direction: column;
  margin: 44px 122px;
  width: 1332px;
  height: 374px;
  justify-content: center;
  padding: 35px;

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
  .container-products{
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
}
 
`;
export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  
`
// Card de Produto
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 181px;
  height: 248px;
  border-radius: 8px;
  text-align: left;
  gap: 13px; 
  font-family: "Inter", sans-serif;

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

  h4{
    font-size: 16px;
    font-weight: 400;
  }
`;