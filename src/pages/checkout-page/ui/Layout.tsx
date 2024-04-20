import { FC } from 'react';
import cn from 'classnames';

import css from './Layout.module.scss';

type TLayoutProps = {};

const Layout: FC<TLayoutProps> = () => {
  return (
    <section className={cn('container', css.productsSection)}>
      <div className={css.inner}>Layout</div>
    </section>
  );
};

export { Layout };
