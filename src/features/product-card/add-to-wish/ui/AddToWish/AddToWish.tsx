import { useState } from 'react';
import cn from 'classnames';
import css from './AddToWish.module.scss';

const AddToWish = () => {
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
          d="M16.794 3.75002C18.118 3.75002 19.362 4.26602 20.298 5.20102C21.2262 6.13093 21.7475 7.39113 21.7475 8.70502C21.7475 10.0189 21.2262 11.2791 20.298 12.209L12 20.508L3.70096 12.209C2.77307 11.2791 2.25195 10.0192 2.25195 8.70552C2.25195 7.39188 2.77307 6.13189 3.70096 5.20202C4.15999 4.74032 4.70604 4.37425 5.30751 4.12501C5.90897 3.87578 6.5539 3.74832 7.20496 3.75002C8.52896 3.75002 9.77296 4.26602 10.709 5.20102L11.469 5.96102L12 6.49202L12.53 5.96102L13.29 5.20102C13.7492 4.73963 14.2953 4.37384 14.8967 4.12478C15.4982 3.87573 16.143 3.74835 16.794 3.75002Z"
          stroke="#666666"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};

export { AddToWish };
