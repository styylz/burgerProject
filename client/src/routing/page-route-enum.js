// no-auth
import HomePage from '../pages/home-page';

// public-only
import LoginPage from '../pages/public-only/login-page';
import SignUpPage from '../pages/public-only/register-page';
// user
import PageLayout from '../components/layouts/page-layout';
import ErrorPage from '../pages/error-page';

export default {
  PageLayout,
  HomePage,
  LoginPage,
  SignUpPage,
  ErrorPage,
};
