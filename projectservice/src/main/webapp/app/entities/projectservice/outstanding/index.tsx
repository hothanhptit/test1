import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Outstanding from './outstanding';
import OutstandingDetail from './outstanding-detail';
import OutstandingUpdate from './outstanding-update';
import OutstandingDeleteDialog from './outstanding-delete-dialog';

const OutstandingRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Outstanding />} />
    <Route path="new" element={<OutstandingUpdate />} />
    <Route path=":id">
      <Route index element={<OutstandingDetail />} />
      <Route path="edit" element={<OutstandingUpdate />} />
      <Route path="delete" element={<OutstandingDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default OutstandingRoutes;
