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

  const { image, price, name, quantity, id } = product;

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
          <RemoveFromCart productId={id} />
        </div>
      </div>
    </article>
  );
};

LayoutCartItems.defaultProps = {
  product: {
    id: 1,
    image: null,
    name: 'Badawi Long 6 Persons - Family Tent fbfbfbfbfbfbfbfbfbfb ',
    price: '8 699',
    quantity: 2,
  },
};

export { LayoutCartItems };
