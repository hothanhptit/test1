import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';

import getStore from 'app/config/store';

import entitiesReducers from './reducers';

import Blog from './learnservice/blog';
import BlogCategory from './learnservice/blog-category';
import Comment from './learnservice/comment';
import Courses from './learnservice/courses';
import CoursesCategory from './learnservice/courses-category';
import FilesBlog from './learnservice/files-blog';
import FilesComment from './learnservice/files-comment';
import FilesLesson from './learnservice/files-lesson';
import Lesson from './learnservice/lesson';
import Home from 'app/modules/home/home';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  const store = getStore();
  store.injectReducer('learnservice', combineReducers(entitiesReducers as ReducersMapObject));
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="/home" element={<Home />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/blog-category/*" element={<BlogCategory />} />
        <Route path="/comment/*" element={<Comment />} />
        <Route path="/courses/*" element={<Courses />} />
        <Route path="/courses-category/*" element={<CoursesCategory />} />
        <Route path="/files-blog/*" element={<FilesBlog />} />
        <Route path="/files-comment/*" element={<FilesComment />} />
        <Route path="/files-lesson/*" element={<FilesLesson />} />
        <Route path="/lesson/*" element={<Lesson />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
