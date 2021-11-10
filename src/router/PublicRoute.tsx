import { PropsWithChildren } from 'react';
import { Route } from 'react-router-dom';

interface Props {
  path: string;
  exact: boolean;
}

function PublicRoute({ children, ...rest }: PropsWithChildren<Props>) {
  return <Route {...rest} render={({ location }) => children} />;
}

export default PublicRoute;
