import { FC } from 'react';
import card from '~shared/cardI.jpg';
import { ChangeQuanity } from '~features/cart/ChangeQuanity';
import { RemoveFromCart } from '~features/cart/RemoveFromCart';

import css from './LayoutCartItems.module.scss';

interface Product {
  img: string;
  title: string;
  price: string;
  name: string;
}
const LayoutCartItems: FC<{ product?: Product }> = ({ product }) => {
  if (!product) {
    return null;
  }

  const { img, title, price, name } = product;

  return (
    <article className={css.cartItem}>
      <div className={css.content}>
        <img className={css.itemImg} src={img} alt={name} />
        <div className={css.itemTop}>
          <p className={css.itemTitle}>{title}</p>
          <ChangeQuanity />
        </div>
        <div className={css.itemPriceActions}>
          <span className={css.itemPrice}>{`${price} ₴`}</span>
          <RemoveFromCart />
        </div>
      </div>
    </article>
  );
};

LayoutCartItems.defaultProps = {
  product: {
    img: card,
    title: 'Kelty Tallboy Family Car Camping Tent, 4 or 6 Person ',
    price: '8 699',
    name: 'card',
  },
};

export { LayoutCartItems };
