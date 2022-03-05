import { Box, Typography } from '@mui/material';
import React from 'react';
import RecipesBanner from './recipes-page-banner';
import RecipesPageDetails from './recipes-page-details-container';
import RecipesPageBox from './recipes-page-box';
import RecipesPageIngredientsList from './recipes-page-ingredients-list';
import RecipesPageCounter from './recipes-page-counter';
import RecipesPageTitle from './recipes-page-title';
import transformToHtml from '../../components/helpers/transformToHtml';

const RecipesPageMobile = ({ data, ingredients }) => (
  <Box sx={{
    display: { xs: 'flex', lg: 'none' },
    flexDirection: 'column',
  }}
  >
    <RecipesBanner
      bannerImage={data}
    />
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
        <RecipesPageIngredientsList
          ingredients={ingredients}
        />
      </RecipesPageBox>
      <RecipesPageBox
        title="Directions"
        usePadding
      >
        <Box>
          {transformToHtml(data?.steps)}
        </Box>
      </RecipesPageBox>
      <Typography sx={{ fontSize: '1.5rem' }}>
        copy link & send to friends
      </Typography>
    </RecipesPageDetails>
  </Box>
);

export default RecipesPageMobile;
