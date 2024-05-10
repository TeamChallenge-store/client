import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setIsCartOpen } from '~widgets/cart-pop-up/model/slice';

const ShortCartMessage = () => {
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    dispatch(setIsCartOpen(true));
  };

  const showMessage = () => {
    toast(
      <div>
        Product added to Cart
        <button
          type="button"
          onClick={handleOpenCart}
          style={{ marginLeft: '10px' }}
        >
          View
        </button>
      </div>,
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
  };

  return { showMessage };
};

export { ShortCartMessage };
