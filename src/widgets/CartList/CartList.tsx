import { FC } from 'react';

import { LayoutCartItems } from '~shared/ui/LayoutCartItems';

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
