import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import styles from './ThankYouLayout.module.scss';
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
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.thankYouContainer}>
          <header className={styles.header}>
            <img src={badge} alt="Badge" className={styles.imageBadge} />
            <h1>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              THANK YOU,{' '}
              <span className={styles.userName}>
                {shippingAddress.name.toUpperCase()}
              </span>
              !
            </h1>
            <p>Your order was completed successfully</p>
          </header>

          <section className={styles.details}>
            <p>
              <span className={styles.label}>Order number</span>
              <strong className={styles.value}>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                #{orderNumber}
              </strong>
            </p>
            <p>
              <span className={styles.label}>Order date</span>
              <strong className={styles.value}>{orderDate}</strong>
            </p>
            <p className={styles.info}>
              We have sent detailed information about the order confirmation to
            </p>
            <p className={styles.email}>
              <strong>{email}</strong>
            </p>
          </section>
        </div>

        <section className={styles.shipping}>
          <h3>Shipping address</h3>
          <address>
            <p>{shippingAddress.name}</p>
            <p>{shippingAddress.phone}</p>
            <p>{shippingAddress.address}</p>
          </address>
        </section>

        <div className={styles.helpContainer}>
          <div className={styles.textContainer}>
            <img src={info} alt="Info" className={styles.infoBadge} />
            <h3 className={styles.help}>Need help? Contact us</h3>
          </div>
          <button type="button" className={styles.continueButton}>
            CONTINUE SHOPPING
          </button>
        </div>
      </div>

      <div className={styles.rightSide}>
        <OrderSummary
          items={items}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
        />
      </div>
    </div>
  );
};

export default ThankYouLayout;
