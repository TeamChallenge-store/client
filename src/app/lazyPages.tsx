import { lazy } from 'react';

const Home = lazy(() => import('~pages/Home'));
const ProductPage = lazy(() => import('~pages/product-page'));
const CartPage = lazy(() => import('~pages/CartPage'));

export { Home, ProductPage, CartPage };
