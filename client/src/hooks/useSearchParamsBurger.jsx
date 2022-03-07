import { useSearchParams } from 'react-router-dom';

const useSearchParamsBurger = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  const setNewSearchParams = (newSearchParams) => {
    newSearchParams.forEach(({ keyToDelete, key, value }) => {
      if (keyToDelete !== undefined) searchParams.delete(keyToDelete);
      searchParams.set(key, value);
    });
    setSearchParams(searchParams);
  };

  return {
    getInitialSearchParams,
    setNewSearchParams,
  };
};

export default useSearchParamsBurger;
