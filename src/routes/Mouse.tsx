import { ContainerGrid, WrapperGrid } from '../components/cardsGrid/CardGrid.style';
import CardGridProducts from '../components/cardsGrid/CardGridProducts';
import { useProductsData } from '../hooks/useProductsData';


const Mouse = () => {
  const { data } = useProductsData("mouse");
  
  return (
    <WrapperGrid>
    <ContainerGrid>
      {data?.results.map(({id, title, thumbnail, price}) => (
        <CardGridProducts id={id} title={title} thumbnail={thumbnail} price={price} key={id}/>
      ))}
    </ContainerGrid>
    </WrapperGrid>
  );
};


export default Mouse;
