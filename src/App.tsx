import { Banner } from './Banner.style';
import { Button } from './Button.style';
import { Header, Icon, Nav, Wrapper, WrapperHeader } from './Header.style';
import { Footer, ProductCard, ProductCardWrapper, ProductGrid, SectionTitle } from './Styled.app';
import carrinho from './assets/carrinho.png';
import perfil from './assets/perfil.png';
import pesquisa from './assets/perquisa.png';
import smartwatch from './assets/smartwatch.png';
import { mock } from "./mock.ts";

type ProductPriceProps = {
  product_price: number | string;
}

function App() {
    function ProductPrice({product_price}: ProductPriceProps) {
      const numericPrice = typeof product_price === 'string' ? parseFloat(product_price) : product_price;

      if (isNaN(numericPrice)) {
        return <p>Preço inválido</p>
      }
      
      const formatPrice = (price: number) => {
        const [integerPart, decimalPart] = price.toFixed(2).split('.');
        return {integerPart, decimalPart}
      }
    
      const {integerPart, decimalPart} = formatPrice(numericPrice)

      return (
         <p>
            R$
            <p className="price-integer">{integerPart}</p>
            <span className="price-decimal">{decimalPart}</span>
          </p> 

      )
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
              <img src={perfil}/>
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

        <main>
          <SectionTitle>Mais Vendidos</SectionTitle>
            
          <ProductCardWrapper>
            {mock.map((product) => 
              <ProductCard>
                <img src={product.image_url} alt={product.product_name} />
                <h4>{product.product_name}</h4>
                <ProductPrice product_price={product.product_price} />              
              </ProductCard>           
            )}
          </ProductCardWrapper>

          <SectionTitle>Promoção Relâmpago</SectionTitle>
          <ProductGrid>
            <ProductCard>
              <img src="https://via.placeholder.com/150" alt="Bola Adidas" />
              <h3>Bola Adidas Copa do Mundo</h3>
              <p>R$ 129,00</p>
            </ProductCard>
          </ProductGrid>
        </main>

        <Footer>
          <p>BrenoCommerce &copy; 2024</p>
        </Footer>
      </Wrapper>
    </>
  );
}

export default App;
