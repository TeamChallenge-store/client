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
    ],
  },
];

const appRouter = () => Router(routes);

export { appRouter };
