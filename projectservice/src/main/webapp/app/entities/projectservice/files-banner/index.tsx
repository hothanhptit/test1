import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FilesBanner from './files-banner';
import FilesBannerDetail from './files-banner-detail';
import FilesBannerUpdate from './files-banner-update';
import FilesBannerDeleteDialog from './files-banner-delete-dialog';

const FilesBannerRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FilesBanner />} />
    <Route path="new" element={<FilesBannerUpdate />} />
    <Route path=":id">
      <Route index element={<FilesBannerDetail />} />
      <Route path="edit" element={<FilesBannerUpdate />} />
      <Route path="delete" element={<FilesBannerDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FilesBannerRoutes;
