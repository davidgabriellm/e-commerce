import styled from 'styled-components';

export const WrapperGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  /* border-radius: 5px; */
`;

export const ContainerGrid = styled.section`
  width: 1332px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 280px));
  grid-auto-rows: 480px;
  gap: 35px;
  /* box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5); */
  padding: 20px;
`;

export const ContainerGridCard = styled.div`
  /* height: 150px; */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  /* box-shadow: 1px 1px 1px; */
  border: 1px solid rgba(100, 100, 100, 0.2);
  position: relative;

  &:hover .iconAddCart{
    color: black;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    opacity: 1;
    font-size: 1.7rem;
  }

  .iconAddCart{
    opacity: 0;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .imageGrid {
    width: 100%;
    height: 300px;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
      width: 220px;
      height: 220px;
      object-fit: cover;
    }

  }

  .infoCard {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid #ddd;
    align-items: center;
    background-color: #f1eeee;

    .btn-addCart {
      background-color: #262260;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      cursor: pointer;

      span {
        font-weight: bold;
        font-size: 15px;
        text-align: center;
        color: white;
      }
    }

    h3 {
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      height: 65px;
      /* height: auto; */
      text-align: left;
      font-weight: 800;
      line-height: 1.3rem;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* Limita o texto a 2 linhas */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis; /* Adiciona os três pontos (...) */
    }

    button {
      border: none;
      background-color: transparent;

      .priceCard {
        font-size: 1.1rem;
        color: black;
        padding: 10px 20px;
        cursor: pointer;
        margin-top: 10px;
      }
    }
  }
`;
