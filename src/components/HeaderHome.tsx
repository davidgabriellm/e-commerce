
import { Header, Icon, Nav, WrapperHeader } from '../styles/Header.style';
import carrinho from './assets/carrinho.png';
import perfil from './assets/perfil.png';
import pesquisa from './assets/perquisa.png';

const HeaderHome = () => {
  return (
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

  )
}

export default HeaderHome