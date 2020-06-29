import React from 'react';
import { ISearchResult } from '../../models';
import styled from '../../styled';

const ShowTitle = styled.h2(({ theme }) => ({
  color: theme.colors.white,
  font: theme.fonts.mobile.xl,
  marginTop: 0,

  [theme.breakpoints.tabletAndHigher]: {
    font: theme.fonts.tablet.xl,
  },

  [theme.breakpoints.desktopAndHigher]: {
    font: theme.fonts.desktop.large,
  },
}));

const ShowMeta = styled.ul(({ theme }) => ({
  listStyleType: 'none',
  paddingInlineStart: 0,
  font: theme.fonts.mobile.large,
  color: theme.colors.tertiary,

  [theme.breakpoints.tabletAndHigher]: {
    font: theme.fonts.tablet.medium,
  },
}));

const ShowSummary = styled.div(({ theme }) => ({
  color: theme.colors.white,
  display: 'none',

  [theme.breakpoints.desktopAndHigher]: {
    display: 'block',
  },
}));

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
      <ShowTitle>{show.name}</ShowTitle>
      <ShowMeta>
        {show.network ? (
          <li>
            Network: <b>{show.network?.name}</b>
          </li>
        ) : null}
        <li>
          Language: <b>{show.language}</b>
        </li>
      </ShowMeta>
    </Wrapper>
  );
};
