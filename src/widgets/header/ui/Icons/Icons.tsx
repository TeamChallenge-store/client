import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import {
  setIsCartOpen,
  selectIsCartOpen,
} from '~widgets/cart-pop-up/model/slice';
import {
  setIsLikesOpen,
  selectIsLikesOpen,
} from '~widgets/likes-pop-up/model/slice';
import CartPopUp from '~widgets/cart-pop-up';
import LikesPopUp from '~widgets/likes-pop-up';
import { Icon } from '~shared/ui/Icon';

import css from './Icons.module.scss';

const Icons = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const isLikesOpen = useSelector(selectIsLikesOpen);

  const handleOpenCart = () => {
    dispatch(setIsCartOpen(true));
  };

  const handleCloseCart = () => {
    dispatch(setIsCartOpen(false));
  };

  const handleOpenLikes = () => {
    dispatch(setIsLikesOpen(true));
  };

  const handleCloseLikes = () => {
    dispatch(setIsLikesOpen(false));
  };

  return (
    <div className={css.icons}>
      <div className={css.iconBtn}>
        <Icon
          onClick={handleOpenLikes}
          className={cn(css.icon, css.mobHide)}
          type="like"
        />
        {isLikesOpen && <LikesPopUp onClose={handleCloseLikes} />}
      </div>
      <div className={css.iconBtn}>
        <Icon
          onClick={handleOpenCart}
          className={css.icon}
          type="cart"
        />
        {isCartOpen && <CartPopUp onClose={handleCloseCart} />}
      </div>
    </div>
  );
};

export { Icons };