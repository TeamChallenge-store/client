import { FC, ReactNode } from 'react';
import card from '~shared/cardI.jpg';

import css from './LayoutProductCard.module.scss';

type TLayoutProductCardProps = {
  wishSlot?: ReactNode;
  addToCartSlot?: ReactNode;
  product?: {
    img: string;
    title: string;
    price: number;
    name: string;
  };
};

const LayoutProductCard: FC<TLayoutProductCardProps> = props => {
  const { product, addToCartSlot, wishSlot } = props;

  if (!product) {
    return null;
  }

  const { img, title, price, name } = product;

  return (
    <article className={css.card}>
      <img className={css.cardImg} src={img} alt={name} />
      <div className={css.content}>
        <h3 className={css.cardTitle}>{title}</h3>
        <div className={css.cardActionInner}>
          <span className={css.cardPrice}>{`$ ${price}`}</span>
          {addToCartSlot}
        </div>
        <span className={css.cardWishButton}>{wishSlot}</span>
      </div>
    </article>
  );
};

LayoutProductCard.defaultProps = {
  product: {
    img: card,
    title: 'Tent Te Terra Incognita  ALFA 2',
    price: 4800,
    name: 'card',
  },
};

export { LayoutProductCard };
