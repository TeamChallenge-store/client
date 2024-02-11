import { FC } from 'react';
import { Link } from 'react-router-dom';

import css from './Catalog.module.scss';

const Catalog: FC = () => {
  return (
    <div className={css.catalog}>
      <h4 className={css.catalogTitle}>Catalog</h4>
      <ul className={css.catalogList}>
        <li>
          <Link to="/tents" className={css.logo}>
            Tents
          </Link>
        </li>
        <li>
          <Link to="/backpacks">Backpacks</Link>
        </li>
        <li>
          <Link to="/clothing" className={css.logo}>
            Clothing
          </Link>
        </li>
        <li>
          <Link to="/Shoes" className={css.logo}>
            Shoes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Catalog };
