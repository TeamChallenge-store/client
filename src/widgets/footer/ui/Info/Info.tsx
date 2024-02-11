import { FC } from 'react';
import { Link } from 'react-router-dom';

import css from './Info.module.scss';

const Info: FC = () => {
  return (
    <div className={css.info}>
      <h4 className={css.infoTitle}>Information</h4>
      <ul className={css.infoList}>
        <li className={css.CatologHide}>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/payment-info">Payment</Link>
        </li>
        <li>
          <Link to="/delivery-info">Delivery</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/Exchange-and-return">Exchange and return</Link>
        </li>
      </ul>
    </div>
  );
};

export { Info };
