import { RouteObject, createHashRouter as Router } from 'react-router-dom';

import { Home } from '~pages/Home';
import { baseLayout } from '~layout/baseLayout';

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
