import { Banner } from './Banner.style';
import { Button } from './Button.style';
import { Header, Icon, Nav, Wrapper, WrapperHeader } from './Header.style';
import {
  ProductCard,
  ProductCardContainer,
  ProductCardWrapper,
  SectionTitle,
} from './Main.style.tsx';
import carrinho from './assets/carrinho.png';
import perfil from './assets/perfil.png';
import pesquisa from './assets/perquisa.png';
import smartwatch from './assets/smartwatch.png';
import { mock, Category, Batteries } from './mock.ts';
import { WrapperCategory, CategoryTitle } from './SectionCategory.tsx';
import {
  SectionTitleBattery,
  BatteryCardWrapper,
  BatteryCardContainer,
  BatteryCard,
} from './BestsellerBatteries.tsx';
import {
  ContainerPromotion,
  ContainerPayment,
  TitlePromotion,
  ContainerSoccerBall,
} from './SoccerBallPromotion.tsx';
import soccerBall from './assets/soccerBall2022.png';
import MoneyDisplay from './MoneyDisplay.tsx';
import CountdownTimer from './CountdownTimer.tsx';

type ProductPriceProps = {
  product_price: number | string;
};

function App() {


  function ProductPrice({ product_price }: ProductPriceProps) {
    const numericPrice =
      typeof product_price === 'string'
        ? parseFloat(product_price)
        : product_price;

    if (isNaN(numericPrice)) {
      return <p>Preço inválido</p>;
    }

    const formatPrice = (price: number) => {
      const [integerPart, decimalPart] = price.toFixed(2).split('.');
      return { integerPart, decimalPart };
    };

    const { integerPart, decimalPart } = formatPrice(numericPrice);

    return (
      <p>
        R$
        <p className="price-integer">{integerPart}</p>
        <span className="price-decimal">{decimalPart}</span>
      </p>
    );
  }

  

  return (
    <>
      <Wrapper>
        <Header>
          <WrapperHeader>
            <h1>BrenoCommerce</h1>
            <Nav>
              <a href="#">Mais Vendidos</a>
              <a href="#">Fones</a>
              <a href="#">Baterias</a>
              <a href="#">Mouse</a>
            </Nav>
            <Icon>
              <img src={perfil} />
              <img src={pesquisa} />
              <img src={carrinho} />
            </Icon>
          </WrapperHeader>
        </Header>

        <Banner>
          <div className="wrapper-banner">
            <div>
              <h4>SMARTWATCH MULTIFUNCIONAL</h4>
              <img src={smartwatch} alt="imagem de um smartwatch" />
              <div className="wrapper-price">
                <span className="old-price">De R$169.90</span>
                <span className="new-price">Por R$139.90</span>
              </div>
              <Button>ADICIONE AO CARRINHO</Button>
            </div>
          </div>
          <div>
            <h2>Universo de Tecnologia</h2>
            <p>Explore nossos produtos com os melhores preços do mercado!</p>
          </div>
          <div className="wrapper-banner">
            <div>
              <h4>SMARTWATCH MULTIFUNCIONAL</h4>
              <img src={smartwatch} alt="imagem de um smartwatch" />
              <div className="wrapper-price">
                <span className="old-price">De R$169.90</span>
                <span className="new-price">Por R$139.90</span>
              </div>
              <Button>
                <strong>ADICIONE AO CARRINHO</strong>
              </Button>
            </div>
          </div>
        </Banner>

        <ProductCardWrapper>
          <ProductCardContainer>
            <div className="container-subtitle">
              <SectionTitle>Mais Vendidos</SectionTitle>
              <p>Ir para os mais vendidos</p>
            </div>
            <div className="container-products">
              {mock.map(product => (
                <ProductCard>
                  <img src={product.image_url} alt={product.product_name} />
                  <h4>{product.product_name}</h4>
                  <ProductPrice product_price={product.product_price} />
                </ProductCard>
              ))}
            </div>
          </ProductCardContainer>
        </ProductCardWrapper>

        <WrapperCategory>
          <CategoryTitle>Compre por categoria</CategoryTitle>
          <div className="containerCategory">
            {Category.map(category => (
              <div className="containerCategoryProduct">
                <div className="containerImage">
                  <img src={category.image} alt={category.Name} />
                </div>
                <h3>{category.Name}</h3>
              </div>
            ))}
          </div>
        </WrapperCategory>

        <BatteryCardWrapper>
          <BatteryCardContainer>
            <div className="container-subtitle">
              <SectionTitleBattery>
                Mais Vendidos em baterias
              </SectionTitleBattery>
              <p>Ir para os mais vendidos</p>
            </div>
            <div className="container-batteries">
              {Batteries.map(battery => (
                <BatteryCard>
                  <img src={battery.image_url} alt={battery.product_name} />
                  <h4>{battery.product_name}</h4>
                  <ProductPrice product_price={battery.product_price} />
                </BatteryCard>
              ))}
            </div>
          </BatteryCardContainer>
        </BatteryCardWrapper>

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
              <span><CountdownTimer/></span>
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
      </Wrapper>
    </>
  );
}

export default App;
