/** eslint-disable */
import {
  PUBLIC_ONLY,
} from './auth-types';

const routeStructure = [
  {
    path: '/',
    pageName: 'PageLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'login', pageName: 'LoginPage', auth: PUBLIC_ONLY },
      { path: 'sign-up', pageName: 'SignUpPage', auth: PUBLIC_ONLY },
      { path: 'burgers', pageName: 'BurgerPage', auth: PUBLIC_ONLY },
      { path: '*', pageName: 'ErrorPage' },
    ],
  },
];

export default routeStructure;
