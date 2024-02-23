import { useState } from 'react';

import css from './ChangeQuanity.module.scss';

const ChangeQuanity = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
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
