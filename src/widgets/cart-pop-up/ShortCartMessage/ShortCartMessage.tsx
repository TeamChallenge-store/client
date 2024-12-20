import { useDispatch } from 'react-redux';
import { toast, Zoom } from 'react-toastify';
import { setIsCartOpen } from '~widgets/cart-pop-up/model/slice';
import doneIcon from './icon/doneIcon.svg';

import css from './ShortCartMessage.module.scss';

const ShortCartMessage = () => {
  const isMobile = window.matchMedia('(max-width: 500px)').matches;
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    dispatch(setIsCartOpen(true));
  };

  const showMessage = () => {
    toast(
      <div
        className={css.cartShortMessage}
        // style={{ backgroundColor: '#E1ECDF' }}
      >
        <div className={css.icon}>
          <img src={doneIcon} alt="Done Icon" />
        </div>
        Product added to Cart
        <button
          type="button"
          onClick={handleOpenCart}
          className={css.messageLink}
        >
          View
        </button>
      </div>,
      {
        position: isMobile ? 'bottom-center' : 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
        className: css.customToast,
      },
    );
  };

  return { showMessage };
};

export { ShortCartMessage };
