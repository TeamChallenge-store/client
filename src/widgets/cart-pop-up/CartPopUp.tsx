import { useState, useEffect } from 'react';

import { CartList } from '~widgets/cart-pop-up/CartList';
import { OrderSummary } from '~widgets/cart-pop-up/OrderSummary';

import { Icon } from '~shared/ui/Icon';

import css from './CartPopUp.module.scss';

const CartPopUp = ({ onClose }: { onClose: () => void }) => {
  const [isCartOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleCloseCart = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleCloseCart();
    }
  };

  return (
    isCartOpen && (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={`${css.modalBackdrop} ${isClosing ? css.closing : ''}`}
        onClick={handleBackdropClick}
      >
        <div className={css.cartPage}>
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
              <CartList />
            </div>
            <OrderSummary total={200} onClose={handleCloseCart} />
          </div>
        </div>
      </div>
    )
  );
};

export { CartPopUp };
