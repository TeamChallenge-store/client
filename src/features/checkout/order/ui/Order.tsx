import { FC } from 'react';

import css from './Order.module.scss';

const Order: FC = () => {
  return (
    <div className={css.orderContainer}>
      <ul className={css.orderList} />
      <button type="button" className={css.editButton}>
        Edit products
      </button>
    </div>
  );
};

export { Order };
