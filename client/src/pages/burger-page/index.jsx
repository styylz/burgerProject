/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BurgerService from '../../services/burger-service';
import BurgerPageBanner from './burger-page-banner';
import BurgerPageGallery from './burger-page-gallery';
import { createUrlParamObj } from '../../components/helpers/url-helpers';
import useSearchParamsBurger from '../../hooks/useSearchParamsBurger';

const BurgerPage = () => {
  const [burgers, setBurgers] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [allBurgerCount, setAllBurgersCount] = useState(-1);
  const [searchParams] = useSearchParams();
  const { getInitialSearchParams, setNewSearchParams } = useSearchParamsBurger();

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    setTimeout(() => {
    setNewSearchParams([
      { key: '_page', value: 1 },
      { key: '_limit', value: 3 },
    ])
  }, 500);
  }, [])

  useEffect(() => {
    (async () => {
      const params = createUrlParamObj(searchParams);
      const fetchedBurgers = await BurgerService.getBurgers(params);
      const burgersLength = fetchedBurgers.dataLength;
      setBurgers(fetchedBurgers.data);
      setAllBurgersCount(burgersLength);
    })();
  }, [searchParams]);



  return (
    <>
      <BurgerPageBanner />
      <BurgerPageGallery
        data={burgers}
        drawerStatus={drawerOpen}
        open={openDrawer}
        close={closeDrawer}
        count={allBurgerCount}
      />
    </>
  );
};

export default BurgerPage;
