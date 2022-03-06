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
import { useSearchParams } from 'react-router-dom';

const BurgerPageGallery = ({
  count, open, data, ...props
}) => {
  console.log('initCOunt',count)
  const [loading, setLoading] = useState(true);
  const [burgersToLoad, setBurgersToLoad] = useState(3);
  const [hasMore, setHasMore] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  //set init params to url
  const getInitialSearchParams = () => {
    if (!searchParams.get('_page') || !searchParams.get('_limit')) {
      searchParams.set('_page', 1);
      searchParams.set('_limit', 3);
      setSearchParams(searchParams);
      return { page: 1, limit: 3 };
    }
    return {
      page: parseInt(searchParams.get('_page'), 10),
      limit: parseInt(searchParams.get('_limit'), 10),
    };
  };

  useEffect(() => {
    const { limit } = getInitialSearchParams();
    setBurgersToLoad(limit);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const setNewSearchParams = (newSearchParams) => {
    newSearchParams.forEach(({ keyToDelete, key, value }) => {
      if (keyToDelete !== undefined) searchParams.delete(keyToDelete);
      searchParams.set(key, value);
    });
    setSearchParams(searchParams);
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      const burgerCount = burgersToLoad + 3;
      if (burgerCount >= count) {
        console.log('burgerC',burgerCount)
        console.log('Count',burgerCount)
        setHasMore(false);
      }
      setNewSearchParams([
        { key: '_limit', value: burgerCount },
      ]);
      setBurgersToLoad(burgerCount);
    }, 800);
  };

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
        loader={<h4>Loading...</h4>}
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
