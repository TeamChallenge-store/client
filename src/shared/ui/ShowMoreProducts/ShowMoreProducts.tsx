/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import cn from 'classnames';
import { useToggle } from '~shared/model/useToggle';
import { ProductList } from '~widgets/product-list';
import { IProductCard } from '~entities/product/model/types';
import css from './ShowMoreProducts.module.scss';

type TShowMoreProductProps = {
  title: string;
  products: IProductCard[];
};

const ShowMoreProducts: FC<TShowMoreProductProps> = ({ title, products }) => {
  // eslint-disable-next-line operator-linebreak
  const [additionalProductsVisible, toggleAdditionalProducts] =
    useToggle(false);

  const initialProducts = products.slice(0, 4);
  const additionalProducts = products.slice(4);

  return (
    <div className={css.showProduct}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.productList}>
        <ProductList products={initialProducts} />
      </ul>
      <div className={cn(additionalProductsVisible ? css.fadeIn : css.fadeOut)}>
        <ul className={css.productList}>
          <ProductList products={additionalProducts} />
        </ul>
      </div>
      <div className={css.btn}>
        <button type="button" onClick={toggleAdditionalProducts}>
          <svg
            className={cn(
              additionalProductsVisible ? css.hideBtn : css.showMoreBtn,
            )}
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
        </button>
      </div>
    </div>
  );
};

export { ShowMoreProducts };
