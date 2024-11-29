import { FC, ReactNode } from 'react';
import cn from 'classnames';

import css from './Layout.module.scss';

type TLayoutProps = {
  sidebar?: ReactNode;
  sortBy?: ReactNode;
  productList?: ReactNode;
  pagination?: ReactNode;
  categoryName?: string;
  productsNumber?: number;
};

const Layout: FC<TLayoutProps> = props => {
  return (
    <section className={cn('container', css.productsSection)}>
      <h1 className={css.title}>{props.categoryName}</h1>
      <div className={css.inner}>
        <aside className={css.filters}>{props.sidebar}</aside>

        <div className={css.listInner}>
          <span className={css.productsNumber}>
            {props.productsNumber}
            {' products found'}
          </span>
          <div className={css.select}>{props.sortBy}</div>
          <ul className={css.listGrid}>{props.productList}</ul>
          {props.pagination}
        </div>
      </div>
    </section>
  );
};

export { Layout };
