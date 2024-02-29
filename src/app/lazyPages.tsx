import { lazy } from 'react';

const Home = lazy(() => import('~pages/Home'));
const ProductPage = lazy(() => import('~pages/product-page'));
const ErrorPage = lazy(() => import('~pages/ErrorPage'));

export { Home, ProductPage, ErrorPage };
