import { ContainerGrid } from '../components/cardsGrid/CardGrid.style';
import CardGridProducts from '../components/cardsGrid/CardGridProducts';
import { useProductsData } from '../hooks/useProductsData';


const Mouse = () => {
  const { data } = useProductsData("mouse");
  
  return (
    <ContainerGrid>
      {data?.results.map(({id, title, thumbnail, price}) => (
        <CardGridProducts id={id} title={title} thumbnail={thumbnail} price={price}/>
      ))}
    </ContainerGrid>
  );
};


export default Mouse;
