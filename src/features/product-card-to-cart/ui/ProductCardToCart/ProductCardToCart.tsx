import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { ThemeProvider, createTheme } from '@mui/material';
import cn from 'classnames';

import css from './ProductCardToCart.module.scss';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '21px 23px',
          borderRadius: '15px',
          backgroundColor: '#a0a0a0',
          boxShadow: 'none',
          position: 'relative',

          '&:hover': {
            backgroundColor: '#a0a0a0',
            boxShadow: 'none',
          },

          '& svg': {
            position: 'absolute',
          },
        },
      },
    },
  },
});

const ProductCardToCart = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);

  const handleClick = () => {
    setIsLiked(!isLiked);
    setLoading(true);

    const id = setTimeout(() => {
      setLoading(false);
    }, 500);

    setTimeoutId(+id);
  };

  useEffect(
    () => () => {
      clearTimeout(timeoutId);
    },
    [timeoutId],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={css.addButtonContainer}>
        <div
          className={cn(css.controlButton, {
            [css.hidden]: isLiked,
          })}
        >
          <button
            className={css.left}
            onClick={() => {
              if (count <= 1) {
                return;
              }

              setCount(prev => prev - 1);
            }}
            type="button"
          >
            -
          </button>
          <span className={css.count}>{count}</span>
          <button
            className={css.right}
            onClick={() => setCount(prev => prev + 1)}
            type="button"
          >
            +
          </button>
        </div>
        <LoadingButton
          onClick={handleClick}
          disabled={isLiked}
          loading={isLoading}
          variant="contained"
        >
          {!isLiked && (
            <svg
              className={css.cartSvg}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L5.5 3L6 5M6 5L8 13M6 5H21L19 13H8M8 13H7.5C6.67157
              13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5
              16H19M19 20C19 20.5523 18.5523 21 18 21C17.4477
              21 17 20.5523 17 20C17 19.4477 17.4477 19 18
              19C18.5523 19 19 19.4477 19 20ZM9 20C9 20.5523
              8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7
              19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 920Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          {isLiked && !isLoading && (
            <svg
              className={css.cartCheck}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.75"
                y="0.75"
                width="18.5"
                height="18.5"
                rx="9.25"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                // eslint-disable-next-line max-len
                d="M8.44214 11.8837L6.75534 10.1969C6.66452 10.1059 6.54122 10.0547 6.41263 10.0547C6.28405 10.0547 6.16074 10.1059 6.06992 10.1969C5.88034 10.3865 5.88034 10.6927 6.06992 10.8823L8.10187 12.9143C8.29145 13.1038 8.5977 13.1038 8.78728 12.9143L13.9303 7.7712C14.1199 7.58162 14.1199 7.27537 13.9303 7.08578C13.8395 6.99476 13.7162 6.9436 13.5876 6.9436C13.459 6.9436 13.3357 6.99476 13.2449 7.08578L8.44214 11.8837Z"
                fill="white"
              />
            </svg>
          )}
        </LoadingButton>
      </div>
    </ThemeProvider>
  );
};

export { ProductCardToCart };
