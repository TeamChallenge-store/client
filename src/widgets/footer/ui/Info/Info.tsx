import { FC } from 'react';
import { Link } from 'react-router-dom';

import css from './Info.module.scss';

type TInfoProps = object;

const Info: FC<TInfoProps> = () => {
  return (
    <div className={css.info}>
      <h4 className={css.infoTitle}>Information</h4>
      <ul className={css.infoList}>
        <li>
          <Link to="/payment-info" className={css.logo}>
            <p>Payment</p>
          </Link>
        </li>
        <li>
          <Link to="/delivery-info">
            <p>Delivery</p>
          </Link>
        </li>
        <li>
          <Link to="/contacts" className={css.logo}>
            <p>Contacts</p>
          </Link>
        </li>
        <li>
          <Link to="/Exchange-and-return " className={css.logo}>
            <p>Exchange and return</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Info };
