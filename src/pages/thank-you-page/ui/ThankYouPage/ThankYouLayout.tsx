import React from 'react';
import cn from 'classnames';
import OrderSummary from '../OrderSummary/OrderSummary';
import css from './ThankYouLayout.module.scss';
import badge from '../icons/Badge.svg';
import info from '../icons/Info.svg';

interface ShippingAddress {
  name: string;
  phone: string;
  address: string;
}

interface Item {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface Props {
  orderNumber: string;
  orderDate: string;
  email: string;
  shippingAddress: ShippingAddress;
  items: Item[];
  subtotal: number;
  shipping: number;
  total: number;
}

const ThankYouLayout: React.FC<Props> = ({
  orderNumber,
  orderDate,
  email,
  shippingAddress,
  items,
  subtotal,
  shipping,
  total,
}) => {
  return (
    <section className={cn('container', css.thankYouPage)}>
      <div className={css.leftSide}>
        <div className={css.thankYouContainer}>
          <header className={css.header}>
            <img src={badge} alt="Badge" className={css.imageBadge} />
            <h1>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              THANK YOU,{' '}
              <span className={css.userName}>
                {shippingAddress.name.toUpperCase()}
              </span>
              !
            </h1>
            <p>Your order was completed successfully</p>
          </header>

          <section className={css.details}>
            <p>
              <span className={css.label}>Order number</span>
              <strong className={css.value}>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                #{orderNumber}
              </strong>
            </p>
            <p>
              <span className={css.label}>Order date</span>
              <strong className={css.value}>{orderDate}</strong>
            </p>
            <p className={css.info}>
              We have sent detailed information about the order confirmation to
            </p>
            <p className={css.email}>
              <strong>{email}</strong>
            </p>
          </section>
        </div>

        <section className={css.shipping}>
          <h3>Shipping address</h3>
          <address>
            <p>{shippingAddress.name}</p>
            <p>{shippingAddress.phone}</p>
            <p>{shippingAddress.address}</p>
          </address>
        </section>

        <div className={css.helpContainer}>
          <div className={css.textContainer}>
            <img src={info} alt="Info" className={css.infoBadge} />
            <h3 className={css.help}>Need help?</h3>
          </div>
          {/* тут має бути посилання на сторінку продуктів - Link */}
          <button type="button" className={css.continueButton}>
            CONTINUE SHOPPING
          </button>
        </div>
      </div>

      <div className={css.rightSide}>
        <OrderSummary
          items={items}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
        />
      </div>
    </section>
  );
};

export default ThankYouLayout;
