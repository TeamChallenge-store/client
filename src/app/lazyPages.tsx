import { lazy } from 'react';

const HomePage = lazy(() => import('~pages/home-page'));
const ProductPage = lazy(() => import('~pages/product-page'));
const ErrorPage = lazy(() => import('~pages/error-page'));
const CheckoutPage = lazy(() => import('~pages/checkout-page'));
const ThankYouPage = lazy(() => import('~pages/thank-you-page'));

export { HomePage, ProductPage, ErrorPage, CheckoutPage, ThankYouPage };
