import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import { type IRoute } from '@interfaces';
import { authRoutes, routes } from 'src/routes';
import { DefaultLayout } from '@layouts';

import { AppRoute } from './AppRoute';
import { AuthRoute } from './AuthRoute';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Route */}
        <Route
          path="/"
          element={<AppRoute />}
        >
          {routes.map((route: IRoute, index: number) => {
            const Page = route.page;
            const Layout = route.layout || DefaultLayout;
            if (route.auth) return null;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout {...route}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Route>
        {/* Auth Route */}
        <Route
          path="/"
          element={<AuthRoute />}
        >
          {authRoutes.map((route: IRoute, index: number) => {
            const Page = route.page;
            const Layout = route.layout || DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout {...route}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
