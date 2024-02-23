import { FC } from 'react';
import card from '~shared/cardI.jpg';
import { ChangeQuanity } from '~features/cart/ChangeQuanity';
import { RemoveFromCart } from '~features/cart/RemoveFromCart';

import css from './LayoutCartItems.module.scss';

type TLayoutCartItemsProps = {
  product?: {
    img: string;
    title: string;
    price: number;
    name: string;
  };
};

const LayoutCartItems: FC<TLayoutCartItemsProps> = props => {
  const { product } = props;

  if (!product) {
    return null;
  }

  const { img, title, price, name } = product;

  return (
    <article className={css.cartItem}>
      <div className={css.content}>
        <img className={css.itemImg} src={img} alt={name} />
        <div className={css.contentAdaptive}>
          <h3 className={css.itemTitle}>{title}</h3>
          <ChangeQuanity />
          <div className={css.itemActionInner}>
            <span className={css.itemPrice}>{`${price} ₴`}</span>
            <RemoveFromCart />
          </div>
        </div>
      </div>
    </article>
  );
};

LayoutCartItems.defaultProps = {
  product: {
    img: card,
    title: 'Natural Honey Bottle',
    price: 12,
    name: 'card',
  },
};

export { LayoutCartItems };
