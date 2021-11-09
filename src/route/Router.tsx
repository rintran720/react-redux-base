import { Spin } from 'antd';
import { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const PrivatePage = lazy(() => import('../pages/Private'));
const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/About'));
const LoginPage = lazy(() => import('../pages/Login'));

const ProtectedRoute: FC = () => {
  const isAuthenticated = true; // useSelector((state) => state.authentication.isAuthenticated);

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Spin />}>
          <PublicRoute
            isAuthenticated={isAuthenticated}
            path="/"
            exact={true}
          ></PublicRoute>
          {/* <PublicRoute
            path="/about"
            isAuthenticated={isAuthenticated}
            exact={true}
          >
            <AboutPage />
          </PublicRoute>
          <PublicRoute
            path="/login"
            isAuthenticated={isAuthenticated}
            exact={true}
          >
            <LoginPage />
          </PublicRoute> */}

          {/* <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
            <ProtectedRoutes />
          </PrivateRoute> */}
        </Suspense>
      </Switch>
    </Router>
  );
};

export default ProtectedRoute;
{
  /* {Object.keys(privateRoutes).map((key) => {
            const { path, component: Component, exact } = privateRoutes[key];
            return (
              <PrivateRoute
                path={`${path}`}
                key={path}
                exact={exact}
                isAuthenticated={false}
              >
                <Component />
              </PrivateRoute>
            );
          })} */
}
