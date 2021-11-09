import { PropsWithChildren } from 'react';
import { Redirect, Route } from 'react-router-dom';
import RouteProps from './RouteProps';

function PublicRoute({
  children,
  isAuthenticated,
  ...rest
}: PropsWithChildren<RouteProps>) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PublicRoute;
