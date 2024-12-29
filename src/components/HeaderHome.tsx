import { Header, Icon, Nav, WrapperHeader } from "../styles/Header.style";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <Header>
      <WrapperHeader>
        <Link to="/">
          <h1>BrenoCommerce</h1>
        </Link>
        <Nav>
          <Link to="/maisVendidos">Mais Vendidos</Link>
          <Link to="/fones">Fones</Link>
          <Link to="/baterias">Baterias</Link>
          <Link to="/mouse">Mouse</Link>
        </Nav>
        <Icon>
          <Link to="/perfil">
            <CgProfile className="icons" />
          </Link>
          <div className="icon-search">
            <IoIosSearch className="icons" />
          </div>
          <Link to="/carrinho">
            <FiShoppingCart className="icons" />
          </Link>
        </Icon>
      </WrapperHeader>
    </Header>
  );
};

export default HeaderHome;
