import { RouteObject, createHashRouter as Router } from 'react-router-dom';

import { baseLayout } from '~layout/baseLayout';

import {
  HomePage,
  ProductPage,
  ErrorPage,
  CheckoutPage,
  ThankYouPage,
  SignInPage,
  SignUpPage,
} from '~lazyPages';

const routes: RouteObject[] = [
  {
    element: baseLayout,
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products/',
        element: <ProductPage />,
      },
      {
        path: 'products/:category',
        element: <ProductPage />,
      },
      {
        path: 'about',
        element: <h1>***in develop***</h1>,
      },
      {
        path: 'contacts',
        element: <h1>***in develop***</h1>,
      },
      {
        path: 'payment',
        element: <h1>***in develop***</h1>,
      },
      {
        path: 'delivery',
        element: <h1>***in develop***</h1>,
      },
      {
        path: 'sign_in',
        element: <SignInPage />,
      },
      {
        path: 'sign_up',
        element: <SignUpPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'thank-you',
        element: <ThankYouPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
];

const appRouter = () => Router(routes);

export { appRouter };
