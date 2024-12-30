import { MouseEvent, useRef } from "react";
import { Category } from "../../mock";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const CarouselCategory = () => {
  const carousel = useRef<HTMLDivElement | null>(null);

  const handleLeftClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };
  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <div className="containerCategory">
      <div className="carousel" ref={carousel}>
        {Category.map((category) => (
          <div className="containerCategoryProduct">
            <div className="containerImage">
              <img src={category.image} alt={category.Name} />
            </div>
            <h3>{category.Name}</h3>
          </div>
        ))}
      </div>
      <button onClick={handleLeftClick}>
        <FaAnglesLeft className="icon-left" />
      </button>
      <button onClick={handleRightClick}>
        <FaAnglesRight className="icon-right" />
      </button>
    </div>
  );
};

export default CarouselCategory;
