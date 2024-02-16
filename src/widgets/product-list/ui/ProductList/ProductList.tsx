import { FC } from 'react';

import { AddToCart, AddToWish } from '~features/product-card';
import { LayoutProductCard } from '~shared/ui/LayoutProductCard';

type TProductListProps = object;

const ProductList: FC<TProductListProps> = () => {
  return (
    <LayoutProductCard addToCartSlot={<AddToCart />} wishSlot={<AddToWish />} />
  );
};

export { ProductList };
