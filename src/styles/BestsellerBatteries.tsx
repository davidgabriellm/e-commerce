import styled from "styled-components";

export const SectionTitleBattery = styled.h2`
  min-width: 232px;
  font-size: 24px;
`;

// Grid de Produtos

export const BatteryCardWrapper = styled.main`
  display: flex;
  background-color: white;
  flex-direction: column;
  margin: 44px 122px;
  width: 100%;
  height: 374px;
  justify-content: center;
  padding: 35px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  .container-subtitle {
    min-width: 545px;
    height: 35px;
    gap: 60px;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: left;
    align-items: left;
    margin-bottom: 17px;

    p {
      min-width: 223px;
      font-family: "Inter", sans-serif;
      margin-left: 30px;
      text-align: center;
      align-items: center;
      display: flex;
    }
  }
  .container-batteries {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
  }
`;
export const BatteryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
// Card de Produto
export const BatteryCard = styled.div`
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
    font-family: "Inter", sans-serif;
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
    color: rgba(97, 97, 97, 1);
  }
`;
