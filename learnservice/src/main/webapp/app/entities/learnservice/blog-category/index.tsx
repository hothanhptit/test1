import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import BlogCategory from './blog-category';
import BlogCategoryDetail from './blog-category-detail';
import BlogCategoryUpdate from './blog-category-update';
import BlogCategoryDeleteDialog from './blog-category-delete-dialog';

const BlogCategoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<BlogCategory />} />
    <Route path="new" element={<BlogCategoryUpdate />} />
    <Route path=":id">
      <Route index element={<BlogCategoryDetail />} />
      <Route path="edit" element={<BlogCategoryUpdate />} />
      <Route path="delete" element={<BlogCategoryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default BlogCategoryRoutes;
