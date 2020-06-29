import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { ShowDetails } from '.';
import { API } from '../api-client';
import { SearchResultsList, SearchResultsListItem } from '../components/SearchResults';
import { useDebounce } from '../hooks';
import { ISearchResult } from '../models';
import styled from '../styled';

export const LoadingResults = styled.div(({ theme }) => ({
  borderLeft: `10px solid ${theme.colors.secondary}`,
  backgroundColor: theme.colors.gray10,
  color: theme.colors.secondary,
  padding: 10,
  margin: 20,

  [theme.breakpoints.tabletAndHigher]: {},
}));

export const SearchField = styled.input(({ theme }) => ({
  backgroundColor: theme.colors.white,
  border: `3px solid ${theme.colors.gray30}`,
  borderRadius: 25,
  color: theme.colors.primary,
  padding: 10,
  margin: '60px 20px 0 20px',
  width: 'calc(100% - 40px)',
  boxSizing: 'border-box',
  font: theme.fonts.mobile.xl,

  '&:focus': {
    outlineStyle: 'none',
    boxShadow: 'none',
    borderColor: theme.colors.secondary,
  },

  [theme.breakpoints.tabletAndHigher]: {
    maxWidth: 420,
  },
}));

export const Shows: React.FC<{}> = () => {
  const { path } = useRouteMatch();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  useEffect(() => {
    async function fetchShowDetails() {
      try {
        setIsLoading(true);
        const response = await API<ISearchResult[]>(
          new Request(`http://api.tvmaze.com//search/shows?q=${debouncedQuery}`)
        );

        setSearchResults(response.data ?? []);
      } catch (error) {
        // TODO: Show error message via context?
        console.error('error', error);
      } finally {
        setIsLoading(false);
      }
    }

    if (debouncedQuery.length > 0) {
      fetchShowDetails();
    } else {
      setSearchResults([]);
    }
  }, [debouncedQuery]);

  const handleSearchQueryChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <>
      <Route exact path={path}>
        <h1>Search</h1>
        <SearchField name="search" type="text" placeholder="Search TV shows" onChange={handleSearchQueryChange} />
        {isLoading ? (
          <LoadingResults>Loading results... please wait.</LoadingResults>
        ) : (
          <SearchResultsList>
            {searchResults.map(searchResult => (
              <SearchResultsListItem key={`show-${searchResult.show.id}`} show={searchResult.show} />
            ))}
          </SearchResultsList>
        )}
      </Route>
      <Route path={`${path}/:showId`}>
        <ShowDetails />
      </Route>
    </>
  );
};
