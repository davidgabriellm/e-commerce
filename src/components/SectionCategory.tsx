import { WrapperCategory, CategoryTitle } from "../styles/SectionCategory.tsx";
import CarouselCategory from "./carousel/CarouselCategory.tsx";

const SectionCategory = () => {
  return (
    <WrapperCategory>
      <CategoryTitle>Compre por categoria</CategoryTitle>
      {/* <div className="containerCategory">
        {Category.map((category) => (
          <div className="containerCategoryProduct" key={category.id}>
            <div className="containerImage">
              <img src={category.image} alt={category.Name} />
            </div>
            <h3>{category.Name}</h3>
          </div>
        ))}
      </div> */}
      <CarouselCategory />
    </WrapperCategory>
  );
};

export default SectionCategory;
