import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FilesPartner from './files-partner';
import FilesPartnerDetail from './files-partner-detail';
import FilesPartnerUpdate from './files-partner-update';
import FilesPartnerDeleteDialog from './files-partner-delete-dialog';

const FilesPartnerRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FilesPartner />} />
    <Route path="new" element={<FilesPartnerUpdate />} />
    <Route path=":id">
      <Route index element={<FilesPartnerDetail />} />
      <Route path="edit" element={<FilesPartnerUpdate />} />
      <Route path="delete" element={<FilesPartnerDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FilesPartnerRoutes;
