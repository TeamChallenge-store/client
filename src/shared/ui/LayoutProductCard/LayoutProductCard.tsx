import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import css from './LayoutProductCard.module.scss';
import { IProductCard } from '~entities/product';

type TLayoutProductCardProps = {
  wishSlot?: ReactNode;
  addToCartSlot?: ReactNode;
  product: IProductCard;
};

const LayoutProductCard: FC<TLayoutProductCardProps> = props => {
  const { product, addToCartSlot, wishSlot } = props;

  if (!product) {
    return null;
  }

  const { id, image, price, name, oldPrice } = product;

  return (
    <li>
      <article className={css.card}>
        <Link className={css.cardTop} to={`/products/${id}`}>
          {image && <img className={css.cardImg} src={image} alt={name} />}
        </Link>
        <div className={css.content}>
          <h3 className={css.cardTitle}>{name}</h3>
          <div className={css.cardActionInner}>
            <div className={css.priceContainer}>
              {oldPrice && (
                <span className={css.oldPrice}>{`${oldPrice} ₴`}</span>
              )}
              <span className={css.cardPrice}>{`${price} ₴`}</span>
            </div>
            {addToCartSlot}
          </div>
          <span className={css.cardWishButton}>{wishSlot}</span>
        </div>
      </article>
    </li>
  );
};

export { LayoutProductCard };
