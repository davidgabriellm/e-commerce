import { ContainerGrid } from "../components/cardsGrid/CardGrid.style";
import CardGridProducts from "../components/cardsGrid/CardGridProducts";
import { useProductsData } from "../hooks/useProductsData";
import useCartStore from "../store/cart.store";

const Headphones = () => {
  const { data } = useProductsData("fones");
  const { cart } = useCartStore();

  console.log("brene", cart);

  return (
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
  );
};

export default Headphones;
