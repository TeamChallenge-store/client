import { LayoutProductCard } from '~entities/layout-product-card';
import { ProductCardToCart } from '~features/product-card-to-cart';
import { ProductCardWish } from '~features/product-card-wish';

const ProductCard = () => (
  <LayoutProductCard
    addToCartSlot={<ProductCardToCart />}
    wishSlot={<ProductCardWish />}
  />
);

export { ProductCard };
