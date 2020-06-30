import React from 'react';
import { ISearchResult } from '../../models';
import styled from '../../styled';
import { ShowDetailsMeta, ShowDetailsTitle } from '../ShowDetails';

const Wrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  padding: 10,
  boxSizing: 'border-box',
  width: '75%',

  [theme.breakpoints.tabletAndHigher]: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    minHeight: 140,
  },
}));

export const SearchResultsListItemMeta: React.FC<ISearchResult> = ({ show }) => {
  return (
    <Wrapper>
      <ShowDetailsTitle>{show.name}</ShowDetailsTitle>
      <ShowDetailsMeta show={show} />
    </Wrapper>
  );
};
