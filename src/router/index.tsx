import { Spin } from 'antd';
import { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import UsePermission from './UsePermission';

const PrivatePage = lazy(() => import('../pages/Private'));
const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/About'));
const LoginPage = lazy(() => import('../pages/Login'));
const PermissionPage = lazy(() => import('../pages/Permission'));
const NotFoundPage = lazy(() => import('../pages/Exeptions/404'));
const PermissionDeniedPage = lazy(() => import('../pages/Exeptions/403'));

const RouteApp: FC = () => {
  const isAuthenticated = true; // useSelector((state) => state.authentication.isAuthenticated);
  const userPermissions = ['abc123', 'def456']; // useSelector((state) => state.authentication.permissions);

  return (
    <Suspense fallback={<Spin />}>
      <Router>
        <Switch>
          {/* Public pages */}
          <PublicRoute path="/" exact={true}>
            <HomePage />
          </PublicRoute>
          <PublicRoute path="/about" exact={true}>
            <AboutPage />
          </PublicRoute>
          <PublicRoute path="/login" exact={true}>
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/403" exact={true}>
            <PermissionDeniedPage />
          </PublicRoute>
          {/* Private pages */}
          <PrivateRoute
            path="/private"
            isAuthenticated={isAuthenticated}
            exact={true}
          >
            <PrivatePage />
          </PrivateRoute>
          <PrivateRoute path="/private2" isAuthenticated={false} exact={true}>
            <PrivatePage />
          </PrivateRoute>

          <PrivateRoute path="/permission" isAuthenticated={true} exact={true}>
            <UsePermission
              userPermissions={userPermissions}
              permission="abc123"
            >
              <PermissionPage />
            </UsePermission>
          </PrivateRoute>

          <PrivateRoute path="/permission2" isAuthenticated={true} exact={true}>
            <UsePermission
              userPermissions={userPermissions}
              permission="abc124"
            >
              <PermissionPage />
            </UsePermission>
          </PrivateRoute>

          {/* Handle not found */}
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RouteApp;
