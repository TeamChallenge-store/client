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
