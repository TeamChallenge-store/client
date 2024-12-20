import { FC } from 'react';
// eslint-disable-next-line max-len
import defaultImage from '../../../../shared/ui/LayoutProductCard/defaultImage.png';

import css from './Order.module.scss';
import { useGetCartProductQuery } from '~entities/cart';
import {
  selectIsCartOpen,
  setIsCartOpen,
} from '~widgets/cart-pop-up/model/slice';
import { useDispatch, useSelector } from 'react-redux';
import CartPopUp from '~widgets/cart-pop-up';

const Order: FC = () => {
  const { data: cartProducts } = useGetCartProductQuery();
  const products = cartProducts?.cart_items;

  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleOpenCart = () => {
    dispatch(setIsCartOpen(true));
  };

  const handleCloseCart = () => {
    dispatch(setIsCartOpen(false));
  };

  return (
    <>
      <div className={css.orderContainer}>
        <ul className={css.orderList}>
          {products?.map(item => (
            <li key={item.id} className={css.orderItem}>
              <div className={css.imageContainer}>
                <img
                  src={item.product.image || defaultImage}
                  alt={item.product.name}
                  className={css.image}
                />
              </div>
              <p className={css.productName}>{item.product.name}</p>
              <span
                className={css.productPrice}
              >{`${item.product.price} ₴`}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={css.editButton}
          onClick={handleOpenCart}
        >
          Edit products
        </button>
      </div>
      {isCartOpen && <CartPopUp onClose={handleCloseCart} />}
    </>
  );
};

export { Order };
