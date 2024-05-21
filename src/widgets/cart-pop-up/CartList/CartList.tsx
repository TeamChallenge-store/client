// import { FC, useEffect, useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { useGetCartProductQuery } from '~entities/cart';
// import { LayoutCartItems } from '~widgets/cart-pop-up/LayoutCartItems';
// // import { ErrorPopUp } from '~widgets/error-pop-up';
// import { CartModal } from '../CartModal';
// // import { Loader } from '~shared/ui/Loader';
// // import { setIsModalOpen } from '~shared/ui/Modal/model/slice';
// import { IBagProduct } from '~entities/cart';
// import css from './CartList.module.scss';

// type TCartList = object;

// const CartList: FC<TCartList> = () => {
//   const [cartProducts, setCartProducts] = useState<IBagProduct[]>([]); //
//   // const { data: cartProducts, isLoading } = useGetCartProductQuery();
//   // const dispatch = useDispatch();

//   useEffect(() => {
//     const products: IBagProduct[] = [
//       {
//         id: 1,
//         name: 'Kelty Tallboy Family Car Camping Tent, 4 or 6 Person ',
//         price: '10',
//         quantity: 2,
//         image: null,
//       },
//       {
//         id: 2,
//         name: 'Kelty Tallboy Family Car Camping Tent, 4 or 6 Person ',
//         price: '8 699',
//         quantity: 1,
//         image: null,
//       },
//     ];

//     setCartProducts(products); // Встановлюємо масив продуктів у стейт
//   }, []);

//   // useEffect(() => {
//   //   if (!cartProducts) {
//   //     dispatch(setIsModalOpen(true));
//   //   }
//   // }, [dispatch, cartProducts]);

//   // if (isLoading) {
//   //   return <Loader />;
//   // }

//   // if (!cartProducts) {
//   //   return <ErrorPopUp />;
//   // }

//   if (cartProducts.length === 0) {
//     return <CartModal />;
//   }

//   return (
//     <div className={css.cartList}>
//       {cartProducts.map(product => (
//         <LayoutCartItems key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export { CartList };
import { FC } from 'react';

import { LayoutCartItems } from '~widgets/cart-pop-up/LayoutCartItems';

type TCartList = object;

const CartList: FC<TCartList> = () => {
  return (
    <>
      <LayoutCartItems />
      <LayoutCartItems />
      <LayoutCartItems />
      <LayoutCartItems />
      <LayoutCartItems />
      <LayoutCartItems />
    </>
  );
};

export { CartList };
