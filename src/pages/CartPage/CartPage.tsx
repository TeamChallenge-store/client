// import { useEffect, useState } from 'react';

import css from './CartPage.module.scss';

const CartPage = () => {
  return (
    <div className={css.cartPage}>
      <div>
        <div className={css.cartHeader}>
          <p className={css.title}>Cart</p>
          {/* <button type="button" className={css.close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button> */}
          <div>.</div>
        </div>
      </div>
    </div>
  );
};

export { CartPage };
