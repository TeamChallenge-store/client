import { useState, useEffect } from 'react';

import { CartList } from '~widgets/cart-pop-up/CartList';
import { OrderSummary } from '~widgets/cart-pop-up/OrderSummary';

import { Icon } from '~shared/ui/Icon';

import css from './CartPopUp.module.scss';
import { useGetCartProductQuery } from '~entities/cart';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalOpen, setIsModalOpen } from '~shared/ui/Modal';
import { Loader } from '~shared/ui/Loader';
import { ErrorPopUp } from '~widgets/error-pop-up';
import { setIsCartOpen } from './model/slice';
import { EmptyCartModal } from './EmptyCartModal';

const CartPopUp = ({ onClose }: { onClose: () => void }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const [isClosing, setIsClosing] = useState(false);
  const { data: cartProducts, isLoading, refetch } = useGetCartProductQuery();
  const products = cartProducts?.cart_items;
  const totalPrice = cartProducts?.total_price;
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  useEffect(() => {
    if (!products) {
      dispatch(setIsModalOpen(true));
    }
  }, [dispatch, products]);

  const handleCloseCart = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const closeCart = () => {
    dispatch(setIsCartOpen(false));
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleCloseCart();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!products) {
    return <ErrorPopUp />;
  }

  return (
    isModalOpen && (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={`${css.modalBackdrop} ${isClosing ? css.closing : ''}`}
        onClick={handleBackdropClick}
      >
        <div className={css.cartPage}>
          {products.length === 0 ? (
            <EmptyCartModal onClose={handleCloseCart} />
          ) : (
            <>
              <div className={css.cartHeader}>
                <p className={css.title}>Cart</p>
                <Icon
                  onClick={handleCloseCart}
                  className={css.closeIcon}
                  type="close"
                />
              </div>
              <div className={css.info}>
                <div className={css.cartList}>
                  <CartList products={products} refetch={refetch} />
                </div>
                <OrderSummary total={totalPrice} onClose={closeCart} />
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export { CartPopUp };
