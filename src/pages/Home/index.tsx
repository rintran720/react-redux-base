import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <Link to={'/private'}>Private</Link>
      <Link to={'/private2'}>Private</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  );
}
