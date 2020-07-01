import React from 'react';
import { Link } from 'react-router-dom';
import { ISearchResult } from '../../models';
import styled from '../../styled';
import { ShowDetailsPoster } from '../ShowDetails';
import { SearchResultsListItemMeta } from './SearchResultsListItemMeta';

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
    width: 'calc(25% - 10px)',
    transition: 'transform.2s',

    ':hover': {
      transform: 'scale(1.02)',
    },
  },
}));

export const SearchResultsListItem: React.FC<ISearchResult> = ({ show }) => {
  const { id, image, name } = show;

  return (
    <ListItem>
      <Link to={`/shows/${id}`}>
        {image ? <ShowDetailsPoster alt={name} src={image?.medium ?? ''} /> : null}
        <SearchResultsListItemMeta show={show} />
      </Link>
    </ListItem>
  );
};
