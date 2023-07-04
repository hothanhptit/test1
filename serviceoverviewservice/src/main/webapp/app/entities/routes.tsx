import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';

import getStore from 'app/config/store';

import entitiesReducers from './reducers';

import Blog from './serviceoverviewservice/blog';
import BlogCategory from './serviceoverviewservice/blog-category';
import Comment from './serviceoverviewservice/comment';
import FilesBlog from './serviceoverviewservice/files-blog';
import FilesComment from './serviceoverviewservice/files-comment';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  const store = getStore();
  store.injectReducer('serviceoverviewservice', combineReducers(entitiesReducers as ReducersMapObject));
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/blog-category/*" element={<BlogCategory />} />
        <Route path="/comment/*" element={<Comment />} />
        <Route path="/files-blog/*" element={<FilesBlog />} />
        <Route path="/files-comment/*" element={<FilesComment />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
