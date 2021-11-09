import { PropsWithChildren } from 'react';
import { Redirect, Route } from 'react-router-dom';

interface Props {
  path: string;
  isAuthenticated: boolean;
  exact: boolean;
}

function PrivateRoute({
  children,
  isAuthenticated,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
