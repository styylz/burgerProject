import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const useBurgerSearchPageParams = () => {
  const [urlParams, setUrlParams] = useSearchParams();
  const getInitialSearchParams = () => ({
    page: parseInt(urlParams.get('_page'), 10),
    limit: parseInt(urlParams.get('_limit'), 10),
  });

  const setSearchParams = (newSearchParams) => {
    newSearchParams.forEach(({ keyToDelete, key, value }) => {
      if (keyToDelete !== undefined) urlParams.delete(keyToDelete);
      urlParams.set(key, value);
    });
    setUrlParams(urlParams);
  };

  useEffect(() => {
    const newPrams = {};
    if (!urlParams.get('_page')) {
      // eslint-disable-next-line no-underscore-dangle
      newPrams._page = 1;
    }
    if (!urlParams.get('_limit')) {
      // eslint-disable-next-line no-underscore-dangle
      newPrams._limit = 3;
    }
    if (Object.keys(newPrams).length !== 0) {
      setUrlParams(newPrams);
    }
  });

  return {
    getInitialSearchParams,
    setSearchParams,
  };
};

export default useBurgerSearchPageParams;
