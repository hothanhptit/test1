import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AboutUs from './about-us';
import AboutUsDetail from './about-us-detail';
import AboutUsUpdate from './about-us-update';
import AboutUsDeleteDialog from './about-us-delete-dialog';

const AboutUsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AboutUs />} />
    <Route path="new" element={<AboutUsUpdate />} />
    <Route path=":id">
      <Route index element={<AboutUsDetail />} />
      <Route path="edit" element={<AboutUsUpdate />} />
      <Route path="delete" element={<AboutUsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AboutUsRoutes;
