import smartwatch from './assets/smartwatch.png';
import { Banner } from '../styles/Banner.style.tsx';
import { Button } from '../styles/Button.style.tsx';


const BannerHome = () => {
  return (
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

  )
}

export default BannerHome