/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import Api from '../../services/api-service';
import BurgerService from '../../services/burger-service';
import BurgerPageBanner from './burger-page-banner';
import BurgerPageGallery from './burger-page-gallery';

const BurgerPage = () => {
  const [burgers, setBurgers] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [allBurgerCount, setAllBurgersCount] = useState(-1);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const Burgers = await BurgerService.getBurgers();
  //     setBurgers(Burgers);
  //   })();
  // }, []);

  const createUrlParamObj = (searchParams, additionParams) => {
    const paramObj = {};
    const addParam = (value, key) => {
      if (!paramObj[key]) {
        paramObj[key] = [value];
      } else if (!paramObj[key].includes(value)) {
        paramObj[key].push(value);
      }
    };
    searchParams.forEach(addParam);
    if (additionParams) {
      additionParams.forEach(({ value, key }) => {
        addParam(value, key);
      });
    }

    return paramObj;
  };

  useEffect(() => {
    (async () => {
      const params = createUrlParamObj(searchParams);
      const fetchedBurgers = await BurgerService.getBurgers(params);
      const burgersLength = fetchedBurgers.length;
      setBurgers(fetchedBurgers);
      setAllBurgersCount(burgersLength);
      setLoading(false);
      // console.log('fetChedParams',fetchedBurgers)
    })();
  }, [searchParams]);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  console.log('allBurgersCount',allBurgerCount)
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
