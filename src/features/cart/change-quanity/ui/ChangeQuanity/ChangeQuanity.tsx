import { FC, useState } from 'react';
import { useAddProductToCartMutation } from '~entities/cart';

import css from './ChangeQuanity.module.scss';

interface ChangeQuanityProps {
  initialQuantity: number;
  productId: number;
  refetch: () => void;
}

const ChangeQuanity: FC<ChangeQuanityProps> = ({
  initialQuantity,
  productId,
  refetch,
}) => {
  const [count, setCount] = useState(initialQuantity);
  const [updateCart] = useAddProductToCartMutation();

  const increment = async () => {
    const newCount = count + 1;

    setCount(newCount);
    await updateCart({ pk: productId, quantity: newCount });
    refetch();
  };

  const decrement = async () => {
    if (count > 0) {
      const newCount = count - 1;

      setCount(newCount);
      await updateCart({ pk: productId, quantity: newCount });
      refetch();
    }
  };

  return (
    <div className={css.counter}>
      <button type="button" onClick={decrement} className={css.counterActions}>
        -
      </button>
      <span className={css.quantity}>{count}</span>
      <button type="button" onClick={increment} className={css.counterActions}>
        +
      </button>
    </div>
  );
};

export { ChangeQuanity };
