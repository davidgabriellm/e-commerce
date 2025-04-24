import { Header, Icon, Nav, WrapperHeader} from "../styles/Header.style";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import useCartStore from "../store/cart.store";

import ShoppingCart from "./ShoppingCart";
import useCartShoppingStore from "../store/cartShoppingOpen.store";

const HeaderHome = () => {
  const {cart} = useCartStore()

  const {toggleCart, cartOpen} = useCartShoppingStore()

  // const handleToggleCart = () => {
  //   toggleCart();
  // };


  return (
    <WrapperHeader>
      <Header>
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
          <div className="containerShoppingCart">
            <FiShoppingCart className="icons ShoppingCart" onClick={toggleCart}/>
            {cart.length > 0 && (
              <span className="cartQuantity">{cart.length}</span>
            )}
          </div>
        </Icon>
        { cartOpen.isOpen && (
          <ShoppingCart/>
        )}
      </Header>
    </WrapperHeader>
  );
};

export default HeaderHome;
