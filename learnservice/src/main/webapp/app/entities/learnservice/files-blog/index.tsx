import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FilesBlog from './files-blog';
import FilesBlogDetail from './files-blog-detail';
import FilesBlogUpdate from './files-blog-update';
import FilesBlogDeleteDialog from './files-blog-delete-dialog';

const FilesBlogRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FilesBlog />} />
    <Route path="new" element={<FilesBlogUpdate />} />
    <Route path=":id">
      <Route index element={<FilesBlogDetail />} />
      <Route path="edit" element={<FilesBlogUpdate />} />
      <Route path="delete" element={<FilesBlogDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FilesBlogRoutes;
