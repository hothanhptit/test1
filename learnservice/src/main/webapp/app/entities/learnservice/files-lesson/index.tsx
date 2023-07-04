import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FilesLesson from './files-lesson';
import FilesLessonDetail from './files-lesson-detail';
import FilesLessonUpdate from './files-lesson-update';
import FilesLessonDeleteDialog from './files-lesson-delete-dialog';

const FilesLessonRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FilesLesson />} />
    <Route path="new" element={<FilesLessonUpdate />} />
    <Route path=":id">
      <Route index element={<FilesLessonDetail />} />
      <Route path="edit" element={<FilesLessonUpdate />} />
      <Route path="delete" element={<FilesLessonDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FilesLessonRoutes;
