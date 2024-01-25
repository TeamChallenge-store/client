import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Layout } from '~app';
import { Home } from '~pages/Home';

import '~app/styles.scss';

const Root = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

export { Root };
