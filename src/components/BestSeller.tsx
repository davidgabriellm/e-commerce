import {
  ProductCard,
  ProductCardContainer,
  ProductCardWrapper,
  SectionTitle,
} from '../styles/BestSeller.style.tsx';
import { mock } from '../mock.ts';

type ProductPriceProps = {
  product_price: number | string;
};
function ProductPrice({ product_price }: ProductPriceProps) {
  const numericPrice =
    typeof product_price === 'string'
      ? parseFloat(product_price)
      : product_price;

  if (isNaN(numericPrice)) {
    return <p>Preço inválido</p>;
  }

  const formatPrice = (price: number) => {
    const [integerPart, decimalPart] = price.toFixed(2).split('.');
    return { integerPart, decimalPart };
  };

  const { integerPart, decimalPart } = formatPrice(numericPrice);

  return (
    <p>
      R$
      <p className="price-integer">{integerPart}</p>
      <span className="price-decimal">{decimalPart}</span>
    </p>
  );
}

const BestSeller = () => {
  return (
    <ProductCardWrapper>
      <ProductCardContainer>
        <div className="container-subtitle">
          <SectionTitle>Mais Vendidos</SectionTitle>
          <p>Ir para os mais vendidos</p>
        </div>
        <div className="container-products">
          {mock.map(product => (
            <ProductCard>
              <img src={product.image_url} alt={product.product_name} />
              <h4>{product.product_name}</h4>
              <ProductPrice product_price={product.product_price} />
            </ProductCard>
          ))}
        </div>
      </ProductCardContainer>
    </ProductCardWrapper>
  );
};

export default BestSeller;
