import { Batteries } from "../mock.ts";
import {
  SectionTitleBattery,
  BatteryCardWrapper,
  BatteryCardContainer,
  BatteryCard,
} from "../styles/BestsellerBatteries.tsx";
import { ProductPrice } from "./BestSeller.tsx";

const BestSellerBattery = () => {
  return (
    <BatteryCardWrapper>
      <BatteryCardContainer>
        <div className="container-subtitle">
          <SectionTitleBattery>Mais Vendidos em baterias</SectionTitleBattery>
          <p>Ir para os mais vendidos</p>
        </div>
        <div className="container-batteries">
          {Batteries.map((battery) => (
            <BatteryCard key={battery.ID}>
              <img src={battery.image_url} alt={battery.product_name} />
              <h4>{battery.product_name}</h4>
              <ProductPrice product_price={battery.product_price} />
            </BatteryCard>
          ))}
        </div>
      </BatteryCardContainer>
    </BatteryCardWrapper>
  );
};

export default BestSellerBattery;
