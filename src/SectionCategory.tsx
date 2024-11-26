import styled from "styled-components";

export const WrapperCategory = styled.section`
    min-width: 1577px;
    min-height: 363px;
    background-color: #262260;
    color:rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    
    .containerCategory{
        width: 100%;
        display: flex;
    }

    .containerCategoryProduct{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        h3{
            font-size: 16px;
            font-family: "Inter", sans-serif;
            margin: 15px auto 74px;
        }
    }

    .containerImage{
        width: 222px;
        height: 222px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 65%;
            height: 65%;
            border-radius: 50%;
        }

    }

`

export const CategoryTitle = styled.h2`
    font-size: 24;
    font-weight: 400;
    width: 191px;
    margin: 19px 0 13px 90px;
    line-height: 33.55px;

`