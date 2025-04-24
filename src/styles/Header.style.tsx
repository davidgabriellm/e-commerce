import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 1200px; /* Largura máxima */
  margin: 0 auto; /* Centraliza horizontalmente */
  min-height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #00ff99; */
  /* background-color: #F8F8F8; */
  background: linear-gradient(to bottom, #222222ea 5% , #F8F8F8 95% );
  position: relative;

  .containerSection{
    width: 1332px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
  }
  

  a {
    text-decoration: none;
  }
`;
export const WrapperHeader = styled.div`
  min-width: 100vw;
  /* height: 100%; */
  height: 7vh;
  background-color: #222222ea;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  
`;

export const Header = styled.header`
  min-width: 1337px;
  height: 47px;
  text-align: center;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* z-index: 1; */

  h1 {
    font-size: 2rem;
    color: white;
  }
`;

export const Nav = styled.nav`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: white;
    font-weight: 200;
    text-decoration: none;

    &:hover {
      color: #00ff99;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  max-width: 133px;
  height: 28px;
  align-items: center;
  justify-content: center;
  gap: 20px;



  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }


  .icon-search {
    display: flex;
    align-items: center;
  }

  .icons {
    font-size: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cartQuantity{
    position: absolute;
    top: -7px;
    right: -7px;
    width: 20px;
    height: 20px;
    color: white;
    background-color: red;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
  }
  .containerShoppingCart{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  img {
    height: 100%;
    align-items: center;
    cursor: pointer;
  }

  a {
    display: flex;
    height: 28px;
    width: 30px;
    align-items: center;
    justify-content: center;
    position: relative;

    

    img {
      height: 100%;
      align-items: center;
      cursor: pointer;
    }
  }
`;

