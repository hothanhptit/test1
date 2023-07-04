import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SupportOnline from './support-online';
import SupportOnlineDetail from './support-online-detail';
import SupportOnlineUpdate from './support-online-update';
import SupportOnlineDeleteDialog from './support-online-delete-dialog';

const SupportOnlineRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SupportOnline />} />
    <Route path="new" element={<SupportOnlineUpdate />} />
    <Route path=":id">
      <Route index element={<SupportOnlineDetail />} />
      <Route path="edit" element={<SupportOnlineUpdate />} />
      <Route path="delete" element={<SupportOnlineDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SupportOnlineRoutes;
