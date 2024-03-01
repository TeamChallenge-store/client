import { FC, ReactNode } from 'react';

import cardi from '~shared/cardI.jpg';

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

  const { image, price, name } = product;

  return (
    <li>
      <article className={css.card}>
        <img className={css.cardImg} src={image && cardi} alt={name} />
        <div className={css.content}>
          <h3 className={css.cardTitle}>{name}</h3>
          <div className={css.cardActionInner}>
            <span className={css.cardPrice}>{`$ ${price}`}</span>
            {addToCartSlot}
          </div>
          <span className={css.cardWishButton}>{wishSlot}</span>
        </div>
      </article>
    </li>
  );
};

export { LayoutProductCard };
