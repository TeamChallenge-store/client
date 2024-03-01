import cn from 'classnames';
import { FC, useState } from 'react';
import CartPopUp from '~entities/CartPopUp';
import { Icon } from '~shared/ui/Icon';

import css from './Icons.module.scss';

type TIconsProps = object;

const Icons: FC<TIconsProps> = () => {
  const [cartCount] = useState(1);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className={css.icons}>
      <Icon className={cn(css.icon, css.mobHide)} to="/login" type="account" />
      <Icon className={cn(css.icon, css.mobHide)} type="like" />
      <div className={css.iconBtn}>
        <Icon onClick={handleOpenCart} className={css.icon} type="cart" />
        {isCartOpen && <CartPopUp onClose={handleCloseCart} />}
        <span className={css.cartCount}>{cartCount}</span>
      </div>
    </div>
  );
};

export { Icons };
