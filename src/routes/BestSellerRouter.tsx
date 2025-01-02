import { ContainerGrid } from '../components/cardsGrid/CardGrid.style';
import CardGridProducts from '../components/cardsGrid/CardGridProducts';
import { useProductsData } from '../hooks/useProductsData';



const BestSellerRouter = () => {
  const {data} = useProductsData('maisVendidos')
  
  return (
    <div>
      <ContainerGrid>
        {data?.results.map(({ id, title, thumbnail, price }) => (
          <CardGridProducts
            id={id}
            title={title}
            thumbnail={thumbnail}
            price={price}
          />
        ))}
      </ContainerGrid>
    </div>
  );

};

export default BestSellerRouter;
