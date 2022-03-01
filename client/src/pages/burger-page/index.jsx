import React, { useEffect, useState } from 'react';
import Api from '../../services/api-service';
import BurgerPageBanner from './burger-page-banner';
import BurgerPageGallery from './burger-page-gallery';

const BurgerPage = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    (async () => {
      const { Burgers } = await Api.getBurgers();
      setBurgers(Burgers);
    })();
  }, []);

  console.log(burgers);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <>

      <BurgerPageBanner />
      <BurgerPageGallery drawerStatus={drawerOpen} open={openDrawer} close={closeDrawer} />
    </>
  );
};

export default BurgerPage;
