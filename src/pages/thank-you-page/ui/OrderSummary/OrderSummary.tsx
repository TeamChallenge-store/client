import React from 'react';
import styles from './OrderSummary.module.scss';

interface Item {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface Props {
  items: Item[];
  subtotal: number;
  shipping: number;
  total: number;
}

const OrderSummary: React.FC<Props> = ({
  items,
  subtotal,
  shipping,
  total,
}) => (
  <div className={styles.summary}>
    <h3>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      Your order({items.length})
    </h3>
    <ul className={styles.itemList}>
      {items.map(item => (
        <li key={item.name} className={styles.item}>
          <div className={styles.itemImageContainer}>
            {/* Rendering the image for each item */}
            <img
              src={item.imageUrl}
              alt={item.name}
              className={styles.itemImage}
            />
          </div>
          <div>
            <p className={styles.itemName}>{item.name}</p>
            <p className={styles.itemQuantity}>
              {item.quantity}
              {' x '}
              {item.price}
              {' ₴'}
            </p>
          </div>
        </li>
      ))}
    </ul>
    <div className={styles.summaryDetails}>
      <h1>Order summary</h1>
      <p>
        <span className={styles.text}>Subtotal</span>
        <span className={styles.price}>
          {subtotal}
          {' ₴'}
        </span>
      </p>
      <p>
        <span className={styles.text}>Shipping</span>
        <span className={styles.price}>
          {shipping}
          {' ₴'}
        </span>
      </p>
      <div className={styles.border} />
      <p className={styles.total}>
        <span>Total</span>
        <span className={styles.total_price}>
          {total}
          {' ₴'}
        </span>
      </p>
    </div>
  </div>
);

export default OrderSummary;
