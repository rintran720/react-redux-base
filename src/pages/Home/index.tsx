import { Button } from 'antd';
import { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getPosts } from '../../actions/homeView.action';
import ListPost from '../../common/components/ListPost';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { AppDispatch, RootState } from '../../store';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { posts, loading } = useAppSelector(
    (state: RootState) => state.homeView
  );
  const dispatch: AppDispatch = useAppDispatch();

  // Functions
  const changeLanguage = (event: SyntheticEvent, lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
  };

  const dispatchGetPosts = () => dispatch(getPosts({}));

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
      <Button type="primary">
        <Link to={'/permission'}>Page need permission (with)</Link>
      </Button>
      <Button type="primary" danger>
        <Link to={'/permission2'}>Page need permission (without)</Link>
      </Button>
      <br />
      <ListPost
        posts={posts}
        loading={loading}
        dispatchGetPosts={dispatchGetPosts}
      ></ListPost>
    </div>
  );
}
