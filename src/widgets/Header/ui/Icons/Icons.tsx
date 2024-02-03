import { FC } from 'react';

import { Icon } from '~shared/ui/Icon';

import css from './Icons.module.scss';

type TIconsProps = object;

const Icons: FC<TIconsProps> = () => {
  return (
    <div className={css.icons}>
      <Icon className={css.icon} to="/login" type="account" />
      <Icon className={css.icon} type="like" />
      <Icon className={css.icon} type="cart" />
    </div>
  );
};

export { Icons };
