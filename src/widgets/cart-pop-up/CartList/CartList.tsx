import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCartProductQuery } from '~entities/cart';
import { LayoutCartItems } from '~widgets/cart-pop-up/LayoutCartItems';
import { ErrorPopUp } from '~widgets/error-pop-up';
import { CartModal } from '../CartModal';
import { Loader } from '~shared/ui/Loader';
import { setIsModalOpen } from '~shared/ui/Modal/model/slice';
import css from './CartList.module.scss';

type TCartList = object;

const CartList: FC<TCartList> = () => {
  const { data: cartProducts, isLoading } = useGetCartProductQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cartProducts) {
      dispatch(setIsModalOpen(true));
    }
  }, [dispatch, cartProducts]);

  if (isLoading) {
    return <Loader />;
  }

  if (!cartProducts) {
    return <ErrorPopUp />;
  }

  if (cartProducts.length === 0) {
    return <CartModal />;
  }

  return (
    <div className={css.cartList}>
      {cartProducts.map(product => (
        <LayoutCartItems key={product.id} product={product} />
      ))}
    </div>
  );
};

export { CartList };
