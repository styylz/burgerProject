import React from 'react';
import {
  Container,
  Box,
  CircularProgress,
  Typography,
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
  >
    <Box>
      <Box>
        <Typography variant="h3" sx={{ textAlign: 'left' }}> LOREM1</Typography>
        <Typography variant="p" sx={{ fontSize: '12px' }}> Stay updated on your burgers world</Typography>
      </Box>

      <Box component="form" onSubmit={onSubmit}>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 3,
        }}
        />

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
    </Box>
  </Container>
);

export default AuthForm;
