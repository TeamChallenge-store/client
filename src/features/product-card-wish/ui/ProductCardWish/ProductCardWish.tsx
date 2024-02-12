import { useState } from 'react';
import cn from 'classnames';
import css from './ProductCardWish.module.scss';

const ProductCardWish = () => {
  const [isClicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(!isClicked)}
      className={css.favButton}
      aria-label="favorite"
      type="button"
    >
      <svg
        className={cn({
          [css.clicked]: isClicked,
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          // eslint-disable-next-line max-len
          d="M21 8.50003C21 14.7444 12.0004 20 12.0004 20C12.0004 20 3 14.6667 3 8.51268C3 6.00003 5 4.00003 7.5 4.00003C10 4.00003 12 7.00003 12 7.00003C12 7.00003 14 4.00003 16.5 4.00003C19 4.00003 21 6.00003 21 8.50003Z"
          stroke="#666666"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export { ProductCardWish };
