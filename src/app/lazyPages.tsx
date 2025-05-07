import { lazy } from 'react';

const HomePage = lazy(() => import('~pages/home-page'));
const ProductPage = lazy(() => import('~pages/product-page'));
const ErrorPage = lazy(() => import('~pages/error-page'));
const CheckoutPage = lazy(() => import('~pages/checkout-page'));
const ThankYouPage = lazy(() => import('~pages/thank-you-page'));
const SignUpPage = lazy(() => import('~pages/sign-up/SignUpPage.tsx'));
const SignInPage = lazy(() => import('~pages/sign-in/SignInPage.tsx'));
const ProductDetails = lazy(() => import('~pages/product-detail-page/ProductDetailPage.tsx'));
const GitHubCallback = lazy(() => import('~pages/sign-in/GitHubCallback.tsx'));

export {
  HomePage,
  ProductPage,
  ErrorPage,
  CheckoutPage,
  ThankYouPage,
  SignUpPage,
  SignInPage,
  ProductDetails,
  GitHubCallback,
};
