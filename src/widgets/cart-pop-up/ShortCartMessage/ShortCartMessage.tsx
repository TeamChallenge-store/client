import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setIsCartOpen } from '~widgets/cart-pop-up/model/slice';
import doneIcon from './icon/doneIcon.svg';

import css from './ShortCartMessage.module.scss';

const ShortCartMessage = () => {
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
        position: 'top-right',
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: '#E1ECDF',
        },
      },
    );
  };

  return { showMessage };
};

export { ShortCartMessage };
