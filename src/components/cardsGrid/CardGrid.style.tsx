import styled from 'styled-components';

export const ContainerGrid = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 400px));
  grid-auto-rows: 500px;
  gap: 20px;
  background-color: #262260;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
`;

export const ContainerGridCard = styled.div`
  /* height: 150px; */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  /* box-shadow: 1px 1px 1px; */

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .infoCard {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-top: 1px solid #ddd;
    align-items: center;

    .btn-addCart {
      background-color: #262260;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      
      
      span{
        font-weight: bold;
        font-size: 15px;
        text-align: center;
        color: white;
      }
    }

    h3 {
      font-size: 1rem;
      height: 75px;
      margin-bottom: 30px;
      text-align: left;
      font-weight: 200;
    }

    button {
        border: none;
        background-color: transparent;
       
        .priceCard{
            font-size: 1.1rem;
            color: black;
            padding: 10px 20px;
            cursor: pointer;
            margin-top: 10px;
        }
     
    }
  }
`;
