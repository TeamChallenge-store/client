import { useState, FC } from 'react';
import css from './ShowMoreProducts.module.scss';
import { ProductList } from '~widgets/product-list';
import { IProductCard } from '~entities/product/model/types';

type TShowMoreProductProps = {
  title: string;
  products: IProductCard[];
};

const ShowMoreProducts: FC<TShowMoreProductProps> = ({ title, products }) => {
  const [showAdditionalProducts, setShowAdditionalProducts] = useState(false);

  const toggleAdditionalProducts = () => {
    setShowAdditionalProducts(prevState => !prevState);
  };

  const displayedProducts = showAdditionalProducts
    ? products
    : products.slice(0, 4);

  return (
    <div className={showAdditionalProducts ? css.showProduct : css.hideProduct}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.productList}>
        <ProductList products={displayedProducts} />
      </ul>
      <div className={css.btn}>
        <svg
          className={showAdditionalProducts ? css.hideBtn : css.showMoreBtn}
          onClick={toggleAdditionalProducts}
          viewBox="0 0 63 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.5 2L31 19L2 2"
            stroke=""
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export { ShowMoreProducts };
