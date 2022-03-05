import { Box, Typography } from '@mui/material';
import React from 'react';
import RecipesBanner from './recipes-page-banner';
import RecipesPageDetails from './recipes-page-details-container';
import RecipesPageBox from './recipes-page-box';
import RecipesPageIngredientsList from './recipes-page-ingredients-list';
import RecipesPageCounter from './recipes-page-counter';
import RecipesPageTitle from './recipes-page-title';

const RecipesPageMobile = () => (
  <Box sx={{
    display: { xs: 'flex', lg: 'none' },
    flexDirection: 'column',
  }}
  >
    <RecipesBanner />
    <RecipesPageDetails>
      <RecipesPageTitle />
      <RecipesPageBox
        properties={{
          display: 'flex',
          justifyContent: 'column',
          alignItems: 'start',
        }}
        title="ingredients"
      >
        <Box sx={{
          height: '20vh',
          pt: 12,
        }}
        >
          <RecipesPageCounter />

        </Box>
        <RecipesPageIngredientsList />
      </RecipesPageBox>
      <RecipesPageBox title="Directions" />
      <Box sx={{
        mt: 5,
        pl: 20,
      }}
      >
        <Typography sx={{ fontSize: '1.5rem' }}>
          copy link & send to friends
        </Typography>
      </Box>
    </RecipesPageDetails>
  </Box>
);

export default RecipesPageMobile;
