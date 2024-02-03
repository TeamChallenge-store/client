import { RouteObject, createHashRouter as Router } from 'react-router-dom';

import { baseLayout } from '~layout/baseLayout';
import { Home } from '~lazyPages';

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
    ],
  },
];

const appRouter = () => Router(routes);

export { appRouter };
