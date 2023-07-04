import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FilesAboutUs from './files-about-us';
import FilesAboutUsDetail from './files-about-us-detail';
import FilesAboutUsUpdate from './files-about-us-update';
import FilesAboutUsDeleteDialog from './files-about-us-delete-dialog';

const FilesAboutUsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FilesAboutUs />} />
    <Route path="new" element={<FilesAboutUsUpdate />} />
    <Route path=":id">
      <Route index element={<FilesAboutUsDetail />} />
      <Route path="edit" element={<FilesAboutUsUpdate />} />
      <Route path="delete" element={<FilesAboutUsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FilesAboutUsRoutes;
