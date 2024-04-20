import { FC } from 'react';
import cn from 'classnames';

import css from './Layout.module.scss';
import { PersonalInfo } from '~features/checkout/personal-info';

type TLayoutProps = {};

const Layout: FC<TLayoutProps> = () => {
  return (
    <section className={cn('container', css.checkoutForm)}>
      <h1 className={css.checkoutTitle}>Checkout</h1>
      <div className={css.inner}>
        <div className={css.form}>
          <section className={css.personalInfo}>
            <h3 className={css.title}>1. Personal information</h3>
            <PersonalInfo />
          </section>

          <section className={css.order}>
            <h3 className={css.title}>Order</h3>
          </section>

          <section className={css.delivery}>
            <h3 className={css.title}>2. Delivery</h3>
          </section>

          <section className={css.paymentMethod}>
            <h3 className={css.title}>3. Payment Method</h3>
          </section>
        </div>
        <aside className={css.total}>Total</aside>
      </div>
    </section>
  );
};

export { Layout };
