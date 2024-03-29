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
        element: <ProductPage />,
      },
      {
        path: 'about',
        element: <Home />,
      },
      {
        path: 'contacts',
        element: <Home />,
      },
      {
        path: 'payment',
        element: <Home />,
      },
      {
        path: 'delivery',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Home />,
      },
      {
        path: '*',
        element: <h1>Ooops...</h1>,
      },
    ],
  },
];

const appRouter = () => Router(routes);

export { appRouter };
