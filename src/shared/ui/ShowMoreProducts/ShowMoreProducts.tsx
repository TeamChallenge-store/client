import { useState, FC } from 'react';
import css from './ShowMoreProducts.module.scss';
import { ProductList } from '~widgets/product-list';
import { Icon } from '~shared/ui/Icon';

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
        <Icon
          type="showMoreProduct"
          className={showAdditionalProducts ? css.hideBtn : css.showMoreBtn}
          onClick={toggleAdditionalProducts}
        />
      </div>
    </div>
  );
};

export { ShowMoreProducts };
