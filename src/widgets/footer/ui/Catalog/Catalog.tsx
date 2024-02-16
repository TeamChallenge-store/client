import { FC } from 'react';
import { Link } from 'react-router-dom';

import css from './Catalog.module.scss';

const Catalog: FC = () => {
  return (
    <article className={css.catalog}>
      <h4 className={css.catalogTitle}>Catalog</h4>
      <ul className={css.catalogList}>
        <li>
          <Link to="/catalog/tents">Tents</Link>
        </li>
        <li>
          <Link to="/catalog/backpacks">Backpacks</Link>
        </li>
        <li>
          <Link to="/catalog/clothing">Clothing</Link>
        </li>
        <li>
          <Link to="/catalog/shoes">Shoes</Link>
        </li>
      </ul>
    </article>
  );
};

export { Catalog };
