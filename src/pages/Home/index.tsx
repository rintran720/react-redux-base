import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home" style={{}}>
      <h2>Home page</h2>
      <Button type="dashed">
        <Link to={'/private'}>Private page with authentication</Link>
      </Button>
      <Button type="primary" danger>
        <Link to={'/private2'}>Private page without authentication</Link>
      </Button>
      <Button type="primary">
        <Link to={'/about'}>Public page About</Link>
      </Button>
      <Button type="primary">
        <Link to={'/login'}>public page Login</Link>
      </Button>
    </div>
  );
}
