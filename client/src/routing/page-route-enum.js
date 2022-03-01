// no-auth
import HomePage from '../pages/home-page';
import BurgerPage from '../pages/burger-page';
import RecipePage from '../pages/recipes-page';

// public-only
import LoginPage from '../pages/public-only/login-page';
import SignUpPage from '../pages/public-only/register-page';
// user
import PageLayout from '../components/layouts/page-layout';
import ErrorPage from '../pages/error-page';
import ProfilePage from '../pages/profile-page';

// admin
import DashboardPage from '../pages/auth/admin';
import DashboardCategoriesPanelPage from '../pages/auth/admin/categories-panel-page';

export default {
  RecipePage,
  PageLayout,
  HomePage,
  BurgerPage,
  LoginPage,
  SignUpPage,
  ErrorPage,
  ProfilePage,
  DashboardPage,
  DashboardCategoriesPanelPage,
};
