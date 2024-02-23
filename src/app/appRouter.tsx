import { RouteObject, createHashRouter as Router } from 'react-router-dom';

import { baseLayout } from '~layout/baseLayout';

import { Home, ProductPage } from '~lazyPages';

const routes: RouteObject[] = [
  {
    element: baseLayout,
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products/:category',
        index: true,
        element: <ProductPage />,
      },
      {
        path: 'about',
        index: true,
        element: <Home />,
      },
      {
        path: 'contacts',
        index: true,
        element: <Home />,
      },
      {
        path: 'payment',
        index: true,
        element: <Home />,
      },
      {
        path: 'delivery',
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        index: true,
        element: <h1>Ooops...</h1>,
      },
    ],
  },
];

const appRouter = () => Router(routes);

export { appRouter };
