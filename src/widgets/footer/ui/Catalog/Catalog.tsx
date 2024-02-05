import { FC } from 'react';
import { Link } from 'react-router-dom';

import css from './Catalog.module.scss';

type TCatalogProps = object;

const Catalog: FC<TCatalogProps> = () => {
  return (
    <div className={css.catalog}>
      <h4 className={css.catalogTitle}>Catalog</h4>
      <ul className={css.catalogList}>
        <li>
          <Link to="/tents" className={css.logo}>
            <p>Tents</p>
          </Link>
        </li>
        <li>
          <Link to="/backpacks">
            <p>Backpacks</p>
          </Link>
        </li>
        <li>
          <Link to="/clothing" className={css.logo}>
            <p>Clothing</p>
          </Link>
        </li>
        <li>
          <Link to="/Shoes" className={css.logo}>
            <p>Shoes</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Catalog };
