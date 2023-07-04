import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FilesComment from './files-comment';
import FilesCommentDetail from './files-comment-detail';
import FilesCommentUpdate from './files-comment-update';
import FilesCommentDeleteDialog from './files-comment-delete-dialog';

const FilesCommentRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FilesComment />} />
    <Route path="new" element={<FilesCommentUpdate />} />
    <Route path=":id">
      <Route index element={<FilesCommentDetail />} />
      <Route path="edit" element={<FilesCommentUpdate />} />
      <Route path="delete" element={<FilesCommentDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FilesCommentRoutes;
