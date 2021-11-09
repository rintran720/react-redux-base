import { Link } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../route/routePaths';

export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <Link to={privateRoutes['/private'].path}>Private</Link>
      <Link to={publicRoutes['/about'].path}>About</Link>
      <Link to={publicRoutes['/login'].path}>Login</Link>
    </div>
  );
}
