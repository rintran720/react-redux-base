import { Spin } from 'antd';
import { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const PrivatePage = lazy(() => import('../pages/Private'));
const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/About'));
const LoginPage = lazy(() => import('../pages/Login'));

const RouteApp: FC = () => {
  const isAuthenticated = true; // useSelector((state) => state.authentication.isAuthenticated);

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Spin />}>
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
        </Suspense>
      </Switch>
    </Router>
  );
};

export default RouteApp;
