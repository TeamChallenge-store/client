import React from 'react';
import cn from 'classnames';
import OrderSummary from '../OrderSummary/OrderSummary';
import css from './ThankYouLayout.module.scss';
import badge from '../icons/Badge.svg';
import info from '../icons/Info.svg';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <section className={cn('container', css.thankYouPage)}>
      <div className={css.leftSide}>
        <div className={css.thankYouContainer}>
          <header className={css.header}>
            <img src={badge} alt="Badge" className={css.imageBadge} />
            <h1 className={css.headerTitle}>
              THANK YOU,{' '}
              <span className={css.userName}>
                {shippingAddress.name.toUpperCase()}
              </span>
              !
            </h1>
            <p className={css.headerDescription}>
              Your order was completed successfully
            </p>
          </header>

          <section className={css.details}>
            <p>
              <span className={css.label}>Order number</span>
              <strong className={css.value}>#{orderNumber}</strong>
            </p>
            <p>
              <span className={css.label}>Order date</span>
              <strong className={css.value}>{orderDate}</strong>
            </p>
            <p className={css.info}>
              We have sent detailed information about the order confirmation to
            </p>
            <p className={css.email}>{email}</p>
          </section>
        </div>

        <section className={css.shipping}>
          <h5 className={css.shippingTitle}>Shipping address</h5>
          <address className={css.shippingAddress}>
            <p>{shippingAddress.name}</p>
            <p>{shippingAddress.phone}</p>
            <p>{shippingAddress.address}</p>
          </address>
        </section>

        <div className={css.helpContainer}>
          <div className={css.textContainer}>
            <img src={info} alt="Info" className={css.infoBadge} />
            <span className={css.helpTitle}>Need help?</span>
            <Link to="/contact" className={css.contactUsLink}>
              Contact us
            </Link>
          </div>
          <button
            onClick={handleContinueShopping}
            className={css.continueButton}
          >
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
