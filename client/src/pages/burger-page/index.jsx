import React, { useEffect, useState } from 'react';
// import Api from '../../services/api-service';
import BurgerService from '../../services/burger-service';
import BurgerPageBanner from './burger-page-banner';
import BurgerPageGallery from './burger-page-gallery';

const BurgerPage = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    (async () => {
      const Burgers = await BurgerService.getBurgers();
      setBurgers(Burgers);
      console.log(Burgers);
    })();
  }, []);

  console.log('burger', burgers);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <>
      <BurgerPageBanner />
      <BurgerPageGallery
        data={burgers}
        drawerStatus={drawerOpen}
        open={openDrawer}
        close={closeDrawer}
      />
    </>
  );
};

export default BurgerPage;
