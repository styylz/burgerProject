import { Box } from '@mui/material';
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
      <RecipesPageTitle title={data} />
      <RecipesPageBox
        properties={{
          display: 'flex',
          justifyContent: 'column',
          alignItems: 'start',
        }}
        title="ingredients"
        top="-4.9vw"
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
        top="-9vw"
        left="-11vw"
        useMargin
      >
        <Box>
          {transformToHtml(data?.steps)}
        </Box>
      </RecipesPageBox>

    </RecipesPageDetails>
  </Box>
);

export default RecipesPageMobile;
