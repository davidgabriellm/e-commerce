import styled from "styled-components";

export const Banner = styled.section`
  background-color: #262260;
  color: black;
  text-align: center;
  display: flex;
  min-height: 370px;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  flex-grow: 1;
  padding: 0;
  width: 1577px;
  height: 363px;
  

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: white;
  }
  h4{
    font-size: 15px;
    margin-bottom: 20px;
  }
  
  span{
    font-size: 0.9rem;
  }
  .old-price{
    color: red;
    text-decoration: line-through; /* Linha riscada */
    font-size: 14px;
    font-weight: bold;
  }
  .new-price{
    color: limegreen; /* Verde brilhante */
    font-size: 16px;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: white;
  }
  span p{
    font-size: 15px;
  }
  
  .wrapper-price{
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-around;
  }

  img{
    width: 200px;
    margin-bottom: 10px;
  }
  .wrapper-banner{
    background-color: white;
    padding: 45px 20px 35px 20px;
  }
`;