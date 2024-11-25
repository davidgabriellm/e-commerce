import { Button } from './Button.style';
import { Header, Nav, Wrapper, WrapperHeader, Icon } from './Header.style';
import { SectionTitle, ProductGrid, ProductCard, Footer } from './Styled.app';
import { Banner } from './Banner.style';
import smartwatch from './assets/smartwatch.png';
import perfil from './assets/perfil.png'
import pesquisa from './assets/perquisa.png'
import carrinho from './assets/carrinho.png'
function App() {
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
          <ProductGrid>
            <ProductCard>
              <img src="https://via.placeholder.com/150" alt="Produto" />
              <h3>Produto 1</h3>
              <p>R$ 129,00</p>
            </ProductCard>
            <ProductCard>
              <img src="https://via.placeholder.com/150" alt="Produto" />
              <h3>Produto 2</h3>
              <p>R$ 129,00</p>
            </ProductCard>
            <ProductCard>
              <img src="https://via.placeholder.com/150" alt="Produto" />
              <h3>Produto 3</h3>
              <p>R$ 129,00</p>
            </ProductCard>
          </ProductGrid>

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
