/*eslint-disable*/
import {
  Box, Button, Container, Grid,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InfiniteScroll from 'react-infinite-scroll-component';
import BurgerPageTitle from './burger-page-title';
import BurgerGalleryCard from '../../components/cards/gallery-card';
import BurgerPageDrawer from './burger-page-drawer';
import BurgerCardSkeleton from '../../components/skeletons/burger-card-skeleton';
import useSearchParamsBurger from '../../hooks/useSearchParamsBurger';

const BurgerPageGallery = ({
  count, open, data, ...props
}) => {
  console.log('initCOunt', count);
  const [loading, setLoading] = useState(true);
  const [burgersToLoad, setBurgersToLoad] = useState(3);
  const [hasMore, setHasMore] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const { getInitialSearchParams, setNewSearchParams } = useSearchParamsBurger();

  console.log(setNewSearchParams);

  const fetchMoreData = () => {
      const burgerCount = burgersToLoad + 3;
      if (burgerCount >= count) {
        setHasMore(false);
      }
      setNewSearchParams([
        { key: '_limit', value: burgerCount },
      ]);
      setBurgersToLoad(burgerCount);
  };

  useEffect(() => {
    const { limit } = getInitialSearchParams();
    setBurgersToLoad(limit);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <Container
      maxWidth="xl"
    >
      <Box sx={{ display: 'flex' }}>
        <BurgerPageTitle />
        <Box sx={{
          width: ' 70%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 'auto',
        }}
        >
          <Button onClick={open}>
            <FilterAltIcon sx={{
              color: 'black',
              opacity: '0.8',
              fontSize: '2.2rem',
            }}
            />
          </Button>
        </Box>
      </Box>
      <InfiniteScroll
        dataLength={burgersToLoad}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<BurgerCardSkeleton skeletonsAmount={3} />}
        endMessage={(
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
    )}
      >
        <Grid
          container
          spacing={2}
          sx={{
            p: 2,
            width: '100%',
          }}
        >
          {data?.map((burger) => (
            <BurgerGalleryCard
              title={burger.title}
              image={burger.image}
              key={burger.id}
              id={burger.id}
            />
          ))}
        </Grid>
      </InfiniteScroll>
      <BurgerPageDrawer drawerHandler={props} />
    </Container>

  );
};

export default BurgerPageGallery;
