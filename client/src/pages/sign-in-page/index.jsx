import {
  Container, Box, Typography, TextField, Button,
} from '@mui/material';
import { yellow } from '@mui/material/colors';
import React from 'react';

const yellowCol = yellow[700];

const SignIn = () => (

  <Container
    maxWidth
    sx={{
      minHeight: '100vh',
      position: 'relative',
    }}
  >
    <Box
      component="form"
      sx={{
        position: 'absolute',
        top: '20%',
        left: '80px',
        width: '60%',
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ mb: 1.5 }}>
        <Typography variant="h3" sx={{ textAlign: 'left' }}> LOREM</Typography>
        <Typography variant="p" sx={{ fontSize: '12px' }}> Stay updated on your burgers world</Typography>
      </Box>
      <Box sx={{ mb: 5 }}>
        <TextField fullWidth label="E-mail" variant="standard" sx={{ marginBottom: '10px', color: yellowCol }} />
        <TextField fullWidth label="Password" variant="standard" />
        <Typography sx={{ fontSize: '12px' }} variant="p"> Forgot Password?</Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Button fullWidth variant="contained" type="submit" sx={{ backgroundColor: yellowCol }}>Contained</Button>
      </Box>
      <Typography sx={{ textAlign: 'center' }} variant="p"> New to BBB? Join now </Typography>

    </Box>
  </Container>
);

export default SignIn;
