import React from 'react';

import RecipesPageLG from './recipes-pageLg';
import RecipesPageXs from './recipes-page-mobile';

const RecipesPage = () => (
  <>
    <RecipesPageLG sx={{ display: { xs: 'none', lg: 'block' } }} />
    <RecipesPageXs sx={{ display: { xs: 'flex', lg: 'none' } }} />
  </>

);

export default RecipesPage;
