import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchResultsListItemMeta } from '.';
import { ISearchResult } from '../../models';
import styled from '../../styled';

const ShowDetailsPoster = styled.img(({ theme }) => ({
  border: `5px solid ${theme.colors.gray30}`,
  boxSizing: 'border-box',
  width: '25%',

  [theme.breakpoints.tabletAndHigher]: {
    borderWidth: 10,
    width: '100%',
  },
}));

const ListItem = styled.li(({ theme }) => ({
  margin: '0 0 10px 0',
  transition: 'transform .2s',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  width: '100%',
  cursor: 'pointer',

  [theme.breakpoints.tabletAndHigher]: {
    width: 'calc(33.3333333% - 10px)',
    flexDirection: 'column',
    margin: 5,
  },

  [theme.breakpoints.desktopAndHigher]: {
    width: 'calc(20% - 10px)',
    transition: 'transform.2s',

    ':hover': {
      transform: 'scale(1.02)',
    },
  },
}));

export const SearchResultsListItem: React.FC<ISearchResult> = ({ show }) => {
  const { id, image, name } = show;
  const history = useHistory();

  function handleOnShowDetailsNavigation(e: MouseEvent<HTMLLIElement>) {
    history.push(`/shows/${e.currentTarget.dataset.showId}`);
  }

  return (
    <ListItem onClick={handleOnShowDetailsNavigation} data-show-id={id}>
      {image ? <ShowDetailsPoster src={image?.medium ?? ''} alt={name} /> : null}
      <SearchResultsListItemMeta show={show} />
    </ListItem>
  );
};
