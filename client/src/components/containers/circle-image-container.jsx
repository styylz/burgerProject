import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

const Circle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: '50%',
  width: '200px ',
  height: '200px ',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  objectFit: 'contain',
}));

const CircleImageContainer = ({ src, children }) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  }}
  >
    <Circle sx={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.1)) , url(${src})`, mb: 2 }} />
    <Box>
      {children}
    </Box>
  </Box>
);

export default CircleImageContainer;
