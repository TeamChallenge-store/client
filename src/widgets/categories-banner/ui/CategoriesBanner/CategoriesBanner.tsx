import firstProductImage from '../../images/1.jpg';
import secondProductImage from '../../images/2.jpg';
import thirdProductImage from '../../images/3.jpg';
import css from './CategoriesBanner.module.scss';
import { CategoryCard } from './CategoryCard/CategoryCard';

const CategoriesBanner = () => {
  return (
    <div className={css.cardContainer}>
      <div className={css.leftContainer}>
        <CategoryCard
          backgroundImage={firstProductImage}
          title="Tents"
          subtitle="Shelter Haven: Your Gateway to Outdoor Bliss"
          linkToProduct="products/tents"
          className={`${css.cardItem} ${css.cardLeft}`}
          isLeftSide
        />
      </div>
      <div className={css.rightContainer}>
        <CategoryCard
          backgroundImage={secondProductImage}
          title="Thermal underwear"
          linkToProduct="/thermal-underwear"
          className={css.cardItem}
        />
        <CategoryCard
          backgroundImage={thirdProductImage}
          title="Backpacks"
          linkToProduct="/backpacks"
          className={css.cardItem}
        />
      </div>
    </div>
  );
};

export { CategoriesBanner };
