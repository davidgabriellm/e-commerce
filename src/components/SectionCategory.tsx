import { Category } from "../mock";
import { WrapperCategory, CategoryTitle } from '../styles/SectionCategory.tsx';


const SectionCategory = () => {
  return (
    <WrapperCategory>
      <CategoryTitle>Compre por categoria</CategoryTitle>
      <div className="containerCategory">
        {Category.map(category => (
          <div className="containerCategoryProduct">
            <div className="containerImage">
              <img src={category.image} alt={category.Name} />
            </div>
            <h3>{category.Name}</h3>
          </div>
        ))}
      </div>
    </WrapperCategory>
  );
};

export default SectionCategory;
