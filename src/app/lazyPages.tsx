import { lazy } from 'react';

const HomePage = lazy(() => import('~pages/home-page'));
const ProductPage = lazy(() => import('~pages/product-page'));

export { HomePage, ProductPage };
