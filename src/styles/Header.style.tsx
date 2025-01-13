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
  min-width: 1500px;
  height: 47px;
  text-align: center;
  padding: 40px 0;
  display: flex;
  justify-content: space-around;
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


  .icon-search {
    display: flex;
    align-items: center;
  }

  .icons {
    font-size: 30px;
    color: white;
  }

  img {
    height: 100%;
    align-items: center;
    cursor: pointer;
  }

  a {
    display: flex;
    height: 28px;
    width: 133px;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const link = styled.a``;
