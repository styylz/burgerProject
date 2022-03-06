/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import parse from 'html-react-parser';
import RecipesPageLG from './recipes-pageLg';
import RecipesPageXs from './recipes-page-mobile';
import BurgerService from '../../services/burger-service';

const RecipePage = () => {
  const [burger, setBurger] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const burgerById = await BurgerService.getBurger(id);
      setBurger(burgerById);
    })();
  }, [id]);

  const ingredientsArray = burger?.ingredients.map((item) => ({
    title: item.ingredient.title,
    amount: item.amount,
  }));

  console.log(ingredientsArray);
  return (
    <>
      <RecipesPageLG
        data={burger}
        ingredients={ingredientsArray}
        sx={{ display: { xs: 'none', lg: 'block' } }}
      />
      <RecipesPageXs
        data={burger}
        ingredients={ingredientsArray}
        sx={{ display: { xs: 'flex', lg: 'none' } }}
      />
    </>

  );
};

export default RecipePage;
