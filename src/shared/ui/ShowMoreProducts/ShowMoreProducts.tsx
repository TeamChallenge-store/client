import { useState, FC } from 'react';
import css from './ShowMoreProducts.module.scss';
import { ProductList } from '~widgets/product-list';

type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
};

type TShowMoreProductProps = {
  title: string;
  products: Product[];
};
const ShowMoreProducts: FC<TShowMoreProductProps> = props => {
  const { title, products } = props;

  const [showAdditionalProducts, setShowAdditionalProducts] = useState(false);

  const toggleAdditionalProducts = () => {
    setShowAdditionalProducts(prevState => !prevState);
  };

  const displayedProducts = products.slice(0, 4);

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
          width="63"
          height="22"
          viewBox="0 0 63 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M60.5 2L31 19L2 2" stroke="#37643B" />
        </svg>
      </div>
    </div>
  );
};

export { ShowMoreProducts };
