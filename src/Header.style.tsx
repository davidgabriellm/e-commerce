import styled from "styled-components";

export const Wrapper = styled.div`
    min-width: 1200px; /* Largura máxima */
    margin: 0 auto; /* Centraliza horizontalmente */
    padding: 0 20px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const WrapperHeader = styled.div`
    min-width: 1500px;
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const Header = styled.header`
  background-color: white;
  color: black;
  text-align: center;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  max-width: 1330;
  height: 47;

  h1 {
    font-size: 2rem;
  }
`;

export const Nav = styled.nav`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: black;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #00ff99;
    }
  }

`;

export const Icon = styled.div`
display: flex;
  min-width: 150px;
  height: 28px;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img{
    height: 100%;
    align-items: center;
    cursor: pointer;
    
  }

`

