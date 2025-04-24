import styled from 'styled-components';

export const ContainerCart = styled.section`
  background-color: #f1eeee;
  height: 100vh;
  width: 23%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  overflow-y: auto;

  h2 {
    text-align: left;
    font-size: 24px;
    font-weight: 200;
    background-color: white;
    position: relative;
    padding: 10px 15px;

    .iconClose {
      position: absolute;
      top: 18px;
      right: 20px;
      font-size: 24px;
      cursor: pointer;
    }
  }

  .wrapperForm{
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #cccccc99;
    border-radius: 5px;

    label{
      width: 100%;
      display: flex;
      justify-content: left;
      align-items: center;
      gap: 10px;

      input{
        outline: none;
        padding: 3px;
      }

      span{
        display: flex;
        text-align: left;
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
`;
export const WrapperCart = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  gap: 10px;
`;

export const CartItems = styled.div`
  width: 100%;
  height: 140px;
  background-color: white;
  padding: 10px 8px;
  border: solid 1px #cccccc99;
  border-radius: 5px;

  .contentPrice {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .contentItem {
    width: 100%;
    height: 87px;
    display: flex;
    gap: 10px;
    border-bottom: solid 1px #eee;
    padding: 2px;

    h3 {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 5px;
      font-family: 'Inter', sans-serif;
      text-align: left;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .contentImage {
      min-width: 100px;
      height: 76px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        /* border-bottom: solid 1px #eee; */
      }
    }
  }
`;
