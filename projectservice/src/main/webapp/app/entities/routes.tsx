import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';

import getStore from 'app/config/store';

import entitiesReducers from './reducers';

import AboutUs from './projectservice/about-us';
import Banner from './projectservice/banner';
import Contact from './projectservice/contact';
import FilesAboutUs from './projectservice/files-about-us';
import FilesBanner from './projectservice/files-banner';
import FilesPartner from './projectservice/files-partner';
import Outstanding from './projectservice/outstanding';
import Partner from './projectservice/partner';
import Quote from './projectservice/quote';
import ServiceProvide from './projectservice/service-provide';
import SupportOnline from './projectservice/support-online';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  const store = getStore();
  store.injectReducer('projectservice', combineReducers(entitiesReducers as ReducersMapObject));
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="/about-us/*" element={<AboutUs />} />
        <Route path="/banner/*" element={<Banner />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/files-about-us/*" element={<FilesAboutUs />} />
        <Route path="/files-banner/*" element={<FilesBanner />} />
        <Route path="/files-partner/*" element={<FilesPartner />} />
        <Route path="/outstanding/*" element={<Outstanding />} />
        <Route path="/partner/*" element={<Partner />} />
        <Route path="/quote/*" element={<Quote />} />
        <Route path="/service-provide/*" element={<ServiceProvide />} />
        <Route path="/support-online/*" element={<SupportOnline />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
