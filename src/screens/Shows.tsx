import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { ShowDetails } from '.';
import { API } from '../api-client';
import { SearchResultsList, SearchResultsListItem } from '../components/SearchResults';
import { useDebounce } from '../hooks';
import { ISearchResult } from '../models';
import styled from '../styled';

export const Wrapper = styled.main(({ theme }) => ({
  margin: '110px 20px 60px 20px',

  [theme.breakpoints.desktopAndHigher]: {
    margin: '120px auto 60px auto',
    width: '70%',
  },
}));

export const FeedbackMessage = styled.div(({ theme }) => ({
  borderLeft: `10px solid ${theme.colors.tertiary}`,
  backgroundColor: theme.colors.gray10,
  color: theme.colors.secondary,
  padding: 10,
  margin: '20px 0',

  [theme.breakpoints.tabletAndHigher]: {},
}));

export const SearchField = styled.input(({ theme }) => ({
  backgroundColor: theme.colors.white,
  border: `3px solid ${theme.colors.gray30}`,
  borderRadius: 25,
  color: theme.colors.primary,
  padding: 10,
  margin: '20px 0',
  width: '100%',
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
  const noResultsFound = searchResults.length === 0 && query.length > 0;

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
        <Wrapper>
          <h2>Search</h2>
          <SearchField name="search" type="text" placeholder="Search TV shows" onChange={handleSearchQueryChange} />
          {isLoading ? (
            <FeedbackMessage>Loading results... please wait.</FeedbackMessage>
          ) : noResultsFound ? (
            <FeedbackMessage>No results. Try another search.</FeedbackMessage>
          ) : (
            <SearchResultsList>
              {searchResults.map(searchResult => (
                <SearchResultsListItem key={`show-${searchResult.show.id}`} show={searchResult.show} />
              ))}
            </SearchResultsList>
          )}
        </Wrapper>
      </Route>
      <Route path={`${path}/:showId`}>
        <ShowDetails />
      </Route>
    </>
  );
};