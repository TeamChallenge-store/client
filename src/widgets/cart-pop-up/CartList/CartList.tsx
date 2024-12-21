import { FC } from 'react';
import { IBagProduct } from '~entities/cart';
import { LayoutCartItems } from '~widgets/cart-pop-up/LayoutCartItems';

interface CartListProps {
  products: IBagProduct[];
  refetch: () => void;
}

const CartList: FC<CartListProps> = ({ products, refetch }) => {
  return (
    <div>
      {products.map(product =>
        product.product?.id ? (
          <LayoutCartItems
            key={product.product.id}
            product={product}
            refetch={refetch}
          />
        ) : null,
      )}
    </div>
  );
};

export { CartList };
