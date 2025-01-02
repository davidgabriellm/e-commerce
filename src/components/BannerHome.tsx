import smartwatch from "../assets/smartwatch.png";
import useCartStore from "../store/cart.store.ts";
import { Banner } from "../styles/Banner.style.tsx";
import { Button } from "../styles/Button.style.tsx";

const BannerHome = () => {
  const { addToCart, cart, removeFromCart, increaseItemQuantity } =
    useCartStore();

  const handleUpdateQuantity = (id: number, quantity: number) => {
    increaseItemQuantity(id, quantity);
  };

  const handleAddToCart = (quantity: number) => {
    const hasProductInCart = cart.filter((elem) =>
      elem.id === 1 ? true : false
    );

    if (hasProductInCart.length > 0) {
      handleUpdateQuantity(1, quantity);
      return;
    }

    addToCart({
      id: 1,
      name: "Smartwatch Multifuncional",
      price: 139.9,
      quantity: 1,
    });

    alert("Item adicionado ao carrinho!");
  };

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
    alert("Item removido do carrinho!");
  };

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
          <Button onClick={() => handleAddToCart(1)}>
            ADICIONE AO CARRINHO
          </Button>

          <button onClick={() => handleRemoveFromCart(1)}>
            Remove a desgraça
          </button>
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
  );
};

export default BannerHome;
