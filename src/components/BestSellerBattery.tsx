import { Batteries } from '../mock.ts';
import {
    SectionTitleBattery,
    BatteryCardWrapper,
    BatteryCardContainer,
    BatteryCard,
  } from '../styles/BestsellerBatteries.tsx';

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

const BestSellerBattery = () => {
  return (
    <BatteryCardWrapper>
          <BatteryCardContainer>
            <div className="container-subtitle">
              <SectionTitleBattery>
                Mais Vendidos em baterias
              </SectionTitleBattery>
              <p>Ir para os mais vendidos</p>
            </div>
            <div className="container-batteries">
              {Batteries.map(battery => (
                <BatteryCard>
                  <img src={battery.image_url} alt={battery.product_name} />
                  <h4>{battery.product_name}</h4>
                  <ProductPrice product_price={battery.product_price} />
                </BatteryCard>
              ))}
            </div>
          </BatteryCardContainer>
        </BatteryCardWrapper>
  )
}

export default BestSellerBattery