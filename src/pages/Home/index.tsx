import { Button } from 'antd';
import { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreType } from '../../reducers';

export default function Home() {
  const state = useSelector((state: StoreType) => state.homeViewReducer);
  const { t, i18n } = useTranslation();
  const changeLanguage = (event: SyntheticEvent, lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="home" style={{}}>
      <h2>Home page</h2>
      <p>{t('Welcome to React')}</p>
      <Button
        onClick={(event) => changeLanguage(event, 'en')}
        type="primary"
        shape="circle"
      >
        en
      </Button>
      <Button
        onClick={(event) => changeLanguage(event, 'fr')}
        type="primary"
        shape="circle"
      >
        fn
      </Button>
      <br />
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
        <Link to={'/login'}>Public page Login</Link>
      </Button>
      <Button type="primary" danger>
        <Link to={'/abc'}>Not Found page</Link>
      </Button>
    </div>
  );
}
