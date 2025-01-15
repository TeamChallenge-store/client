import React from 'react';
import styles from './OrderSummary.module.scss';

interface Item {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string | null; 
}

interface Props {
  items: Item[];
  subtotal: number;
  shipping: number;
  total: number;
}

const OrderSummary: React.FC<Props> = ({ items, subtotal, shipping, total }) => {
  const getImageUrl = (imagePath: string | null): string => {
    if (!imagePath) {
      return 'http://localhost:8000/media/default_image.jpg';
    }
    if (imagePath.startsWith('/media/')) {
      return `http://localhost:8000${imagePath}`;
    }
    return `http://localhost:8000/media/${imagePath}`;
  };

  return (
    <div className={styles.summary}>
      <h3>Your order ({items.length})</h3>
      <ul className={styles.itemList}>
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className={styles.item}>
            <div className={styles.itemImageContainer}>
              <img
                src={getImageUrl(item.imageUrl)}
                alt={item.name || 'Product Image'}
                className={styles.itemImage}
              />
            </div>
            <div>
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.itemQuantity}>
                {item.quantity} x {item.price} ₴
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.summaryDetails}>
        <h1>Order summary</h1>
        <p>
          <span className={styles.text}>Subtotal</span>
          <span className={styles.price}>{subtotal} ₴</span>
        </p>
        <p>
          <span className={styles.text}>Shipping</span>
          <span className={styles.price}>{shipping} ₴</span>
        </p>
        <div className={styles.border} />
        <p className={styles.total}>
          <span className={styles.total_text}>Total</span>
          <span className={styles.total_price}>
              {total}
              {' ₴'}
            </span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
