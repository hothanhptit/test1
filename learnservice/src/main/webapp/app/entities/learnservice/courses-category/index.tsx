import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CoursesCategory from './courses-category';
import CoursesCategoryDetail from './courses-category-detail';
import CoursesCategoryUpdate from './courses-category-update';
import CoursesCategoryDeleteDialog from './courses-category-delete-dialog';

const CoursesCategoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CoursesCategory />} />
    <Route path="new" element={<CoursesCategoryUpdate />} />
    <Route path=":id">
      <Route index element={<CoursesCategoryDetail />} />
      <Route path="edit" element={<CoursesCategoryUpdate />} />
      <Route path="delete" element={<CoursesCategoryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CoursesCategoryRoutes;
