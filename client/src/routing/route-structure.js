import {
  PUBLIC_ONLY,
  USER,
  ADMIN,
} from './auth-types';

const routeStructure = [
  {
    path: '/',
    pageName: 'PageLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'login', pageName: 'LoginPage', auth: PUBLIC_ONLY },
      { path: 'sign-up', pageName: 'SignUpPage', auth: PUBLIC_ONLY },
      { path: 'burgers', pageName: 'BurgerPage' },
      { path: 'recipe', pageName: 'RecipePage', auth: PUBLIC_ONLY },
      { path: 'profile', pageName: 'ProfilePage', auth: USER },
      { path: '*', pageName: 'ErrorPage' },
    ],
  },
  {
    path: '/',
    pageName: 'AdminLayout',
    auth: ADMIN,
    childRoutes: [
      { path: 'dashboard', pageName: 'DashboardPage', auth: ADMIN },
      { path: 'dashboard/categories', pageName: 'DashboardCategoriesPanelPage', auth: ADMIN },
    ],
  },
];

export default routeStructure;
