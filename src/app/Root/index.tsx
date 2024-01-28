import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from '~app/appRouter';
import { appStore } from '~app/appStore';

import '~shared/styles/base.scss';

const Root = () => (
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <RouterProvider router={appRouter()} />
    </ReduxProvider>
  </React.StrictMode>
);

export { Root };
