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

  // const test = parse(`<h3 style="color:blue;"> Step1 </h3>
  //  <p style="font-size: 1rem;">Melt half the butter in a small lidded pan. Add the onion and a pinch of salt, and cook for 15 minutes on a gentle heat until softened and buttery but not coloured. Remove from the heat.
  //  </p>
  //  <h3> Step2 </h3>
  //  <p style="font-size: 1rem;"> Put the beef mince in a bowl and add the celery salt and a really good grind of black pepper. Mix everything together with clean hands then divide into four balls.
  //  </p>
  //  <h3> Step3 </h3>
  //  <div> </div>
  //  <p style="font-size: 1rem;">Put each ball between two sheets of baking paper and squash into flat patties, at least 1cm bigger than your buns (they will shrink in the pan so don’t worry about them being too wide).
  //  </p>
  //  </div>`);

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
