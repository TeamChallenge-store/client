import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
// import { useState } from 'react';
import {
  setIsCartOpen,
  selectIsCartOpen,
} from '~widgets/cart-pop-up/model/slice';
import CartPopUp from '~widgets/cart-pop-up';
import { Icon } from '~shared/ui/Icon';

import css from './Icons.module.scss';

const Icons = () => {
  // const [cartCount] = useState(1);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleOpenCart = () => {
    dispatch(setIsCartOpen(true));
  };

  const handleCloseCart = () => {
    dispatch(setIsCartOpen(false));
  };

  return (
    <div className={css.icons}>
      <Icon className={cn(css.icon, css.mobHide)} type="like" />
      <div className={css.iconBtn}>
        <Icon onClick={handleOpenCart} className={css.icon} type="cart" />
        {isCartOpen && <CartPopUp onClose={handleCloseCart} />}
        {/* <span className={css.cartCount}>{cartCount}</span> */}
      </div>
    </div>
  );
};

export { Icons };
