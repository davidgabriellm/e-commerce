import React from 'react';
import { Product } from '../../interfaces/product-data';
import useCartStore from '../../store/cart.store';
import { ContainerGridCard } from './CardGrid.style';
import { BsCartPlus } from "react-icons/bs";

const CardGridProducts = ({ id, title, thumbnail, price }: Product) => {
  const { addToCart, cart } = useCartStore();

  const handleAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!id || !title || !thumbnail || !price) {
      console.error('O produto é indefinido.');
      return;
    }

    addToCart({
      id,
      title,
      thumbnail,
      price,
    });
  };

  // const handleRemoveCart = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()

  //   if (!id) {
  //     console.error('O ID do produto é indefinido.');
  //     return;
  //   }

  //   removeItemToCart(id);
  // };
  return (
    <ContainerGridCard key={id}>
      <div className="imageGrid">
        <img src={thumbnail?.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
      </div>
      <div className="infoCard">
        <h3>{title}</h3>
        <button>
          <span className="priceCard">
            {price?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </button>
        <button className="btn-addCart">
          <span>COMPRAR AGORA</span>
        </button>
      </div>
      <button onClick={handleAddCart}>
      <BsCartPlus className='iconAddCart'/>
      </button>
    </ContainerGridCard>
  );
};

export default CardGridProducts;
