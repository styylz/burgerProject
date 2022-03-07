import { Box, Typography } from '@mui/material';
import React from 'react';
import parse from 'html-react-parser';
import RecipesBanner from './recipes-page-banner';
import RecipesPageDetails from './recipes-page-details-container';
import RecipesPageBox from './recipes-page-box';
import RecipesPageIngredientsList from './recipes-page-ingredients-list';
import RecipesPageCounter from './recipes-page-counter';
import RecipesPageTitle from './recipes-page-title';

const RecipesPageLg = ({ data, ingredients }) => {
  if (ingredients === undefined && data === undefined) return null;
  const transformToHtml = (string) => parse(`${string}`);
  return (
    <Box
      sx={{ display: { xs: 'none', lg: 'flex' } }}
    >
      <RecipesBanner
        bannerImage={data}
      />
      <RecipesPageDetails>
        <RecipesPageTitle title={data} />
        <RecipesPageBox
          properties={{
            display: 'flex',
            justifyContent: 'column',
            alignItems: 'start',
          }}
          title="ingredients"
          top="-2.9vw"
          left="-7.3vw"
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
          top="-5vw"
          left="-7vw"
        >
          <Box
            burger={data}
          >
            <Box sx={{ minWidth: '300px' }}>
              {transformToHtml(data?.steps)}
            </Box>
          </Box>
        </RecipesPageBox>
        <Box
          sx={{
            mt: 5,
            pl: 20,
          }}
        >
          <Typography
            sx={{ fontSize: '1.5rem' }}
          >
            copy link & send to friends
          </Typography>
        </Box>
      </RecipesPageDetails>
    </Box>
  );
};

export default RecipesPageLg;
