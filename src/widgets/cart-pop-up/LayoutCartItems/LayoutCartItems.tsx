/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
import { ChangeQuanity } from '~features/cart/change-quanity';
import { RemoveFromCart } from '~features/cart/remove-from-cart';
import { IBagProduct } from '~entities/cart';
// eslint-disable-next-line max-len
import defaultImage from '../../../shared/ui/LayoutProductCard/defaultImage.png';
import css from './LayoutCartItems.module.scss';

const LayoutCartItems: FC<{ product?: IBagProduct; refetch: () => void }> = ({
  product,
  refetch,
}) => {
  if (!product) {
    return null;
  }

  const { image, name, id } = product.product;

  return (
    <article className={css.cartItem}>
      <div className={css.content}>
        <img
          className={css.itemImg}
          src={image || defaultImage}
          onError={e => {
            (e.target as HTMLImageElement).src = defaultImage;
          }}
        />
        <div className={css.itemTop}>
          <p className={css.itemTitle}>{name}</p>
          <ChangeQuanity
            initialQuantity={product.quantity}
            productId={id}
            refetch={refetch}
          />
        </div>
        <div className={css.itemPriceActions}>
          <span className={css.itemPrice}>{`${product.total_price} ₴`}</span>
          <RemoveFromCart productId={id} refetch={refetch} />
        </div>
      </div>
    </article>
  );
};

export { LayoutCartItems };
