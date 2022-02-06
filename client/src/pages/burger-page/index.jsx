import React from 'react';
import BurgerPageBanner from './burger-page-banner';
import BurgerPageGallery from './burger-page-gallery';

const BurgerPage = () => {
  console.log('');

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
