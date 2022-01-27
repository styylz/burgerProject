import React from 'react';
import {
  Container,
  Box,
  Typography,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from './auth-form-button';

const AuthForm = ({
  children,
  title,
  linkTo,
  linkTitle,
  loading,
  onSubmit,
  isValid,
}) => (
  <Container
    maxWidth="xs"
    component="main"
    sx={{ pt: '2vh' }}
  >
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 3,
      }}
      >
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
      {children}
      <Button disabled={!isValid}>
        {
        loading
          ? <CircularProgress color="inherit" />
          : title
        }
      </Button>
      <Link sx={{ textDecoration: 'none' }} to={linkTo}>
        {linkTitle}
      </Link>
    </Box>
  </Container>
);

export default AuthForm;
