import styled from "styled-components";

export const WrapperCategory = styled.section`
  max-width: 1577px;
  min-height: 363px;
  background-color: #262260;
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;

  .carousel {
    /* width: 100%; */
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 0 40px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .containerCategory {
    display: flex;
    position: relative;

    button {
      cursor: pointer;
      border: none;
      background-color: transparent;

      &:hover {
        /* background-color: rgba(255, 255, 255, 0.5); */
      }

      .icon-left {
        position: absolute;
        font-size: 3rem;
        position: absolute;
        top: 35%;
        left: 0px;
        padding: 10px;
        border-radius: 4px;
        transition: background-color 0.4s linear;
        color: #05dd17;

        &:hover {
          background-color: rgba(165, 164, 164, 0.3);
        }
      }
      .icon-right {
        position: absolute;
        font-size: 3rem;
        top: 35%;
        right: 0px;
        padding: 10px;
        border-radius: 4px;
        transition: background-color 0.4s linear;
        color: #05dd17;

        &:hover {
          background-color: rgba(119, 116, 116, 0.3);
        }
      }
    }
  }

  .containerCategoryProduct {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h3 {
      font-size: 16px;
      font-family: "Inter", sans-serif;
      margin: 15px auto 74px;
    }
  }

  .containerImage {
    width: 222px;
    height: 222px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 65%;
      height: 65%;
      border-radius: 50%;
    }
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 24;
  font-weight: 400;
  width: 191px;
  margin: 19px 0 13px 90px;
  line-height: 33.55px;
`;
