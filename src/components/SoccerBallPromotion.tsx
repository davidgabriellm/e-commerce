import {
  ContainerPromotion,
  ContainerPayment,
  TitlePromotion,
  ContainerSoccerBall,
} from "../styles/SoccerBallPromotion.tsx";
import soccerBall from "../assets/soccerBall2022.png";
import MoneyDisplay from "../components/MoneyDisplay.tsx";
import CountdownTimer from "../components/CountdownTimer.tsx";

const SoccerBallPromotion = () => {
  return (
    <ContainerPromotion>
      <div className="contentPromotion">
        <TitlePromotion>PROMOÇÃO RELÂMPAGO</TitlePromotion>
        <h3>BOLA ADIDAS COPA DO MUNDO 2022</h3>
        <p>
          Bola de couro, original produzida hoje, compre agora e jogue como
          Neymar pelo Barcelona em 2015 vire um gênio da pelota!
        </p>
        <ContainerPayment>
          <span>50% off</span>
          <img />
        </ContainerPayment>
        <div className="containerValue">
          <MoneyDisplay value={129.9} />
          <span className="oldValue">R$329,90</span>
        </div>
        <div className="containerBuy">
          <button>ADICIONE AO CARRINHO</button>
          <button>COMPRE AGORA</button>
        </div>
      </div>
      <div className="contentImageBall">
        <div>
          <span>
            <CountdownTimer />
          </span>
        </div>
        <ContainerSoccerBall>
          <div className="containerImageSmallBall">
            <div className="wrapperSmallBall">
              <img
                src={soccerBall}
                alt="bola de futebol da copa do mundo de 2002"
              />
            </div>
            <div className="wrapperSmallBall">
              <img
                src={soccerBall}
                alt="bola de futebol da copa do mundo de 2002"
              />
            </div>
            <div className="wrapperSmallBall">
              <img
                src={soccerBall}
                alt="bola de futebol da copa do mundo de 2002"
              />
            </div>
            <div className="wrapperSmallBall">
              <img
                src={soccerBall}
                alt="bola de futebol da copa do mundo de 2002"
              />
            </div>
          </div>
          <div className="containerImageBigBall">
            <div className="wrapperBigBall">
              <img
                src={soccerBall}
                alt="bola de futebol da copa do mundo de 2002"
              />
            </div>
          </div>
        </ContainerSoccerBall>
      </div>
    </ContainerPromotion>
  );
};

export default SoccerBallPromotion;
