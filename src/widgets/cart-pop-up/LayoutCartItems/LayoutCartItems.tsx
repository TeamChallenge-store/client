/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
import { ChangeQuanity } from '~features/cart/ChangeQuanity';
import { RemoveFromCart } from '~features/cart/RemoveFromCart';
import { IBagProduct } from '~entities/cart';
// eslint-disable-next-line max-len
import defaultImage from '../../../shared/ui/LayoutProductCard/defaultImage.png';
import css from './LayoutCartItems.module.scss';

const LayoutCartItems: FC<{ product?: IBagProduct }> = ({ product }) => {
  if (!product) {
    return null;
  }

  const { image, price, name, quantity } = product;

  return (
    <article className={css.cartItem}>
      <div className={css.content}>
        <img className={css.itemImg} src={image || defaultImage} />
        <div className={css.itemTop}>
          <p className={css.itemTitle}>{name}</p>
          <ChangeQuanity initialQuantity={quantity} productId={product.id} />
        </div>
        <div className={css.itemPriceActions}>
          <span className={css.itemPrice}>{`${price} ₴`}</span>
          <RemoveFromCart />
        </div>
      </div>
    </article>
  );
};

export { LayoutCartItems };
