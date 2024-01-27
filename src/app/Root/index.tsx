import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from '~app/appRouter';

import '~app/styles.scss';

const Root = () => (
  <React.StrictMode>
    <RouterProvider router={appRouter()} />
  </React.StrictMode>
);

export { Root };
