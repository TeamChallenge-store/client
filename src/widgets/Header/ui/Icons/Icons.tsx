import { FC, useState } from 'react';

import { Icon } from '~shared/ui/Icon';

import css from './Icons.module.scss';

type TIconsProps = object;

const Icons: FC<TIconsProps> = () => {
  const [cartCount] = useState(1);

  return (
    <div className={css.icons}>
      <Icon className={css.icon} to="/login" type="account" />
      <Icon className={css.icon} type="like" />
      <div className={css.iconBtn}>
        <Icon className={css.icon} type="cart" />
        <span className={css.cartCount}>{cartCount}</span>
      </div>
    </div>
  );
};

export { Icons };
