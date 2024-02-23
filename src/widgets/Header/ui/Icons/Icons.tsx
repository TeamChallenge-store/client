import { FC, useState } from 'react';

import CartPopUp from '~entities/CartPopUp';
import { Icon } from '~shared/ui/Icon';

import css from './Icons.module.scss';

type TIconsProps = object;

const Icons: FC<TIconsProps> = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className={css.icons}>
      <Icon className={css.icon} to="/login" type="account" />
      <Icon className={css.icon} type="like" />
      <Icon onClick={handleOpenCart} className={css.icon} type="cart" />
      {isCartOpen && <CartPopUp onClose={handleCloseCart} />}
    </div>
  );
};

export { Icons };
