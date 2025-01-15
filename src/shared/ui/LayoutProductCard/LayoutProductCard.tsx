import { FC, ReactNode } from 'react';
import defaultImage from './defaultImage.png';

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

  const { image, price, name, old_price: oldPrice } = product;

  return (
    <li>
      <article className={css.card}>
        <div className={css.cardTop}>
          <img className={css.cardImg} src={image || defaultImage} alt={name} />
        </div>
        <h3 className={css.cardTitle}>{name}</h3>
        <div className={css.content}>
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
