import { Icon } from '~shared/ui/Icon';

import css from './RemoveFromCart.module.scss';

const RemoveFromCart = () => {
  return (
    <>
      <Icon className={css.removeIcon} type="remove" />
    </>
  );
};

export { RemoveFromCart };
