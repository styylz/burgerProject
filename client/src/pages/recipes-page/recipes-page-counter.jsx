import {
  Box, Button, Paper, Typography,
} from '@mui/material';
import React from 'react';

const RecipesPageCounter = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Paper elevation={3} sx={{ display: 'flex' }}>
      <Paper elevation={3}>
        <Button size="large" color="warning" variant="contained">+1</Button>
      </Paper>
      <Box sx={{ width: '3vw', pt: 0.8 }}>

        <Typography sx={{ textAlign: 'center', pt: 0.5 }}>0</Typography>
      </Box>
      <Paper elevation={3}>
        <Button size="large" color="warning" variant="contained">-1</Button>
      </Paper>
    </Paper>

  </Box>
);

export default RecipesPageCounter;
