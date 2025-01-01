import { Product } from '../../interfaces/product-data';
import { ContainerGridCard } from './CardGrid.style';

const CardGridProducts = ({ id, title, thumbnail, price }: Product) => {
  return (
    <ContainerGridCard key={id}>
      <img src={thumbnail?.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
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
          <span>Adicionar ao carrinho</span>
        </button>
      </div>
    </ContainerGridCard>
  );
};

export default CardGridProducts;
