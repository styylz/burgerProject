import React, { useEffect, useState } from 'react';
import RecipesPageLG from './recipes-pageLg';
import RecipesPageXs from './recipes-page-mobile';
import BurgerService from '../../services/burger-service';

const RecipesPage = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    (async () => {
      const Burgers = await BurgerService.getBurgers();
      setBurgers(Burgers);
      console.log('Recipes', burgers.steps);
    })();
  }, []);

  return (
    <>
      <RecipesPageLG sx={{ display: { xs: 'none', lg: 'block' } }} />
      <RecipesPageXs sx={{ display: { xs: 'flex', lg: 'none' } }} />
    </>

  );
};

export default RecipesPage;
