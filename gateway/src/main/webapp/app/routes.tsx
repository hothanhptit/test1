import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import LoginRedirect from 'app/modules/login/login-redirect';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import EntitiesRoutes from 'app/entities/routes';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';

const loading = <div>loading ...</div>;

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => loading,
});

const ProjectserviceRoutes = React.lazy(() =>
  import('@projectservice/entities-routes').catch(() => import('app/shared/error/error-loading'))
);
const ServiceoverviewserviceRoutes = React.lazy(() =>
  import('@serviceoverviewservice/entities-routes').catch(() => import('app/shared/error/error-loading'))
);
const LearnserviceRoutes = React.lazy(() => import('@learnservice/entities-routes').catch(() => import('app/shared/error/error-loading')));
const ProductserviceRoutes = React.lazy(() =>
  import('@productservice/entities-routes').catch(() => import('app/shared/error/error-loading'))
);

const AppRoutes = () => {
  return (
    <div className="view-routes">
      <ErrorBoundaryRoutes>
        <Route index element={<Home />} />
        <Route path="logout" element={<Logout />} />
        <Route
          path="admin/*"
          element={
            <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="oauth2/authorization/oidc" element={<LoginRedirect />} />
        <Route
          path="projectservice/*"
          element={
            <Suspense fallback={loading}>
              {/* <PrivateRoute hasAnyAuthorities={[AUTHORITIES.USER]}> */}
                <ProjectserviceRoutes />
              {/* </PrivateRoute> */}
            </Suspense>
          }
        />
        <Route
          path="serviceoverviewservice/*"
          element={
            <Suspense fallback={loading}>
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.USER]}>
                <ServiceoverviewserviceRoutes />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="learnservice/*"
          element={
            <Suspense fallback={loading}>
              {/* <PrivateRoute hasAnyAuthorities={[AUTHORITIES.USER]}> */}
                <LearnserviceRoutes />
              {/* </PrivateRoute> */}
            </Suspense>
          }
        />
        <Route
          path="productservice/*"
          element={
            <Suspense fallback={loading}>
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.USER]}>
                <ProductserviceRoutes />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute hasAnyAuthorities={[AUTHORITIES.USER]}>
              <EntitiesRoutes />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default AppRoutes;
