import useCartStore from '../store/cart.store';
import { IoClose } from 'react-icons/io5';

import {
  CartItems,
  ContainerCart,
  WrapperCart,
} from '../styles/ShoppingCart.style';
import useCartShoppingStore from '../store/cartShoppingOpen.store';

const ShoppingCart = () => {
  const { cart, getTotalPrice } = useCartStore();

  const { toggleCart } = useCartShoppingStore();

  return (
    <ContainerCart>
      <h2>
        Resumo do carrinho
        <IoClose className="iconClose" onClick={toggleCart} />
      </h2>
      <WrapperCart>
        {cart.map(cart => (
          <CartItems key={cart.id}>
            <div className="contentItem">
              <div className="contentImage">
                <img src={cart.thumbnail} alt={cart.title} />
              </div>
              <h3>{cart.title}</h3>
            </div>
            <div className="contentPrice">
              <span>
                {cart.price?.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
              <div className="containerQuantity">+ 1 -</div>
            </div>
          </CartItems>
        ))}
        <h3>Endereço para a entrega dos produtos</h3>

        <form className="wrapperForm">

          <label>
            <span>CEP:</span>
            <input type="text" id="cep" name="cep" required />
          </label>

          <label>
            <span>número:</span>
            <input type="text" id="number" name="number" required />
          </label>

          <label>
            <span>complemento :</span>
            <input type="text" id="complemento" name="complemento" />
          </label>

        </form>

        <div className="containerPayment">
          <div className="subtotal">
            <span>subtotal</span>
            <span>{getTotalPrice().toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}</span>
          </div>
          <div className="creditCard">
            <span>12x R$ {(getTotalPrice() / 12).toFixed(2)} s/ juros</span>
          </div>
          <div className="paymentPix">
            <span> {(getTotalPrice() * 0.9).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}</span>
            <p>desconto de 10% em pix</p>
          </div>

          <button>CONFIRMAR COMPRA</button>
        </div>
      </WrapperCart>
    </ContainerCart>
  );
};

export default ShoppingCart;
