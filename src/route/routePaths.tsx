import { ElementType, lazy } from 'react';

interface Route {
  path: string;
  component: ElementType;
  exact: boolean;
}
export const publicRoutes: { [key: string]: Route } = {
  '/': {
    path: '/',
    component: lazy(() => import('../pages/Home')),
    exact: true
  },
  '/login': {
    path: '/login',
    component: lazy(() => import('../pages/Login')),
    exact: true
  },
  '/about': {
    path: '/about',
    component: lazy(() => import('../pages/About')),
    exact: true
  }
};

export const privateRoutes: { [key: string]: Route } = {
  '/private': {
    path: '/private',
    component: lazy(() => import('../pages/Private')),
    exact: true
  }
};

export default { publicRoutes, privateRoutes };
