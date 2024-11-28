import styled from "styled-components";

export const ContainerPromotion = styled.section`
width:1311.87px;
height:510px;
display: flex;
flex-direction: row;

    .contentPromotion{
        display: flex;
        flex-direction: column;
        gap: 27px;

        h3{
            max-width: 706px;
            font-family: "Inclusive Sans", serif;
            font-weight: 400;
            font-size: 48px;
        }

        p{
            font-size: 20px;
            font-weight: 400;
            font-family: "Inclusive Sans", serif;
            color:rgba(0, 0, 0, 1);
            ;
        }
    }

    .containerValue{
        display: flex;
        flex-direction: row;

        p{
            display: flex;
            font-family: "Inter", sans-serif;
        }

        .oldValue{
            display: flex;
            align-items: center;
            margin-left: 24px;
            font-size: 24px;
            text-decoration: line-through;
            color: rgba(0, 0, 0, 0.46)
            ;
        }
    }
    .containerBuy{
        display: flex;
        flex-direction: row;
        gap: 65px;

        button{
            width: 312px;
            height: 46px;
            border-radius: 14px;
            background-color:var(--Buttons-Color, rgba(23, 221, 135, 1));
            border: none;
            color: var(--Secondary-Color, rgba(14, 10, 56, 1));
            font-weight: bold;
            font-size: 20px;
            line-height: 27px;
        ;
        }
        
    }
    .contentImageBall{
        display: flex;
        flex-direction: column;
        
        span{
            text-align: right;
            display: flex;
            justify-content: right;
            padding: 10px 0;
        }
    }




`;


export const TitlePromotion = styled.h2`
    font-size: 48px;
    font-weight: 400;
    
    width: 660px;
    text-align: left;

`

export const ContainerPayment = styled.div`
    
    
    
    
    span{
        font-size: 20px;
        background: rgba(255, 0, 0, 1);
        font-family: "Inter", sans-serif;
        font-weight: 800;
        padding: 2.30px 5.50px;
        ;
    }

`

export const ContainerSoccerBall = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;



    .containerImageSmallBall{
        display: flex;
        flex-direction: column;
        gap: 26px;

        .wrapperSmallBall{
            background-color: rgba(14, 10, 56, 0.05);
            width: 98px;
            height: 93px;
            display: flex;
            justify-content: center;
            align-items: center;

            img{
                width: 100%;
            }
        }
        
    }

    .wrapperBigBall{
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 450px;
            min-height: 430px;
            background-color:rgba(14, 10, 56, 0.05);

            img{
                width: 100%;
            }
        }

`
