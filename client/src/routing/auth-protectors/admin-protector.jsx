/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const AdminProtector = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);

  if (!auth.loggedIn) {
    return <Navigate to={`${routes.LoginPage}?redirectTo=${pathname}`} />;
  }

  if (auth.user?.role !== 'ADMIN') {
    return <Navigate to={routes.ProfilePage} />;
  }

  return <>{children}</>;
};

export default AdminProtector;
