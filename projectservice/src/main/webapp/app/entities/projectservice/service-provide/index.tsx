import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ServiceProvide from './service-provide';
import ServiceProvideDetail from './service-provide-detail';
import ServiceProvideUpdate from './service-provide-update';
import ServiceProvideDeleteDialog from './service-provide-delete-dialog';

const ServiceProvideRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ServiceProvide />} />
    <Route path="new" element={<ServiceProvideUpdate />} />
    <Route path=":id">
      <Route index element={<ServiceProvideDetail />} />
      <Route path="edit" element={<ServiceProvideUpdate />} />
      <Route path="delete" element={<ServiceProvideDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ServiceProvideRoutes;
