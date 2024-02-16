// import { useEffect, useState } from 'react';

import { CartList } from '~widgets/CartList';

import css from './CartPage.module.scss';

const CartPage = () => {
  return (
    <div className={css.cartPage}>
      <div>
        <div className={css.cartHeader}>
          <p className={css.title}>Cart</p>
          <div>x</div>
          <CartList />
        </div>
      </div>
    </div>
  );
};

export { CartPage };
