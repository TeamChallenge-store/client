import { useState } from 'react';

import { CartList } from '~widgets/CartList';
import { OrderSummary } from '~shared/ui/OrderSummary';

import { Icon } from '~shared/ui/Icon';

import css from './CartPopUp.module.scss';

const CartPopUp = ({ onClose }: { onClose: () => void }) => {
  const [isCartOpen] = useState(true);

  const handleCloseCart = () => {
    onClose();
  };

  return (
    isCartOpen && (
      <div className={`${css.modalBackdrop}`}>
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
            <OrderSummary total={200} />
          </div>
        </div>
      </div>
    )
  );
};

export { CartPopUp };
