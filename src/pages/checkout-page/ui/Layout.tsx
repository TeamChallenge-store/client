import { FC } from 'react';
import cn from 'classnames';

import css from './Layout.module.scss';
import { PersonalInfo } from '~features/checkout/personal-info';
import { Order } from '~features/checkout/order';
import { PaymentMethod } from '~features/checkout/payment-method';
import { TotalSummary } from '~features/checkout/total-summary';
import { DeliveryMethod } from '~features/checkout/delivery-method';

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
            <Order />
          </section>

          <section className={css.delivery}>
            <h3 className={css.title}>2. Delivery</h3>
            <DeliveryMethod />
          </section>

          <section className={css.paymentMethod}>
            <h3 className={css.title}>3. Payment Method</h3>
            <PaymentMethod />
          </section>
        </div>
        <aside className={css.total}>
          <h3 className={css.totalTitle}>Total</h3>
          <TotalSummary />
        </aside>
      </div>
    </section>
  );
};

export { Layout };
