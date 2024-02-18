import { lazy } from 'react';

const Home = lazy(() => import('~pages/Home'));
const ProductPage = lazy(() => import('~pages/product-page'));

export { Home, ProductPage };
