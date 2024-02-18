import cn from 'classnames';

import { Icon } from '~shared/ui/Icon';

import css from './Icons.module.scss';

const Icons = () => {
  return (
    <div className={css.icons}>
      <Icon className={cn(css.icon, css.mobHide)} to="/login" type="account" />
      <Icon className={cn(css.icon, css.mobHide)} type="like" />
      <Icon className={css.icon} type="cart" />
    </div>
  );
};

export { Icons };
