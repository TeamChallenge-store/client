import { FC, ReactNode } from 'react';
import cn from 'classnames';

import css from './Layout.module.scss';

type TLayoutProps = {
  categories?: ReactNode;
  categoriesSlider?: ReactNode;
  title?: ReactNode;
  bestsellers?: ReactNode;
  subCategory?: ReactNode;
  newProducts?: ReactNode;
  stock?: ReactNode;
  subscribe?: ReactNode;
};

const Layout: FC<TLayoutProps> = props => {
  return (
    <>
      <section className={cn(css.catigories, 'container')}>
        {props.categories}
      </section>
      <section className={cn(css.categoriesSlider, 'container')}>
        {props.categoriesSlider}
      </section>
      <article className={cn(css.title, 'container')}>{props.title}</article>
      <section className={cn(css.bestsellers, 'container')}>
        {props.bestsellers}
      </section>
      <section className={cn(css.subCategory, 'container')}>
        {props.subCategory}
      </section>
      <section className={cn(css.newProducts, 'container')}>
        {props.newProducts}
      </section>
      <section className={css.stock}>
        <div>{props.stock}</div>
      </section>
      <section className={cn(css.subscribe, 'container')}>
        {props.subscribe}
      </section>
    </>
  );
};

export { Layout };
