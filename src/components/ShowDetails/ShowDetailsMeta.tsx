import React from 'react';
import { ISearchResult } from '../../models';
import styled from '../../styled';

const ShowMeta = styled.ul(({ theme }) => ({
  listStyleType: 'none',
  paddingInlineStart: 0,
  font: theme.fonts.mobile.medium,
  color: theme.colors.tertiary,

  [theme.breakpoints.tabletAndHigher]: {
    font: theme.fonts.tablet.small,
  },

  [theme.breakpoints.tabletAndHigher]: {
    font: theme.fonts.desktop.xs,
  },
}));

export const ShowDetailsMeta: React.FC<ISearchResult> = ({ show }) => {
  const { network, language } = show;

  return (
    <ShowMeta>
      {network ? (
        <li>
          Network: <b>{network?.name}</b>
        </li>
      ) : null}
      <li>
        Language: <b>{language}</b>
      </li>
    </ShowMeta>
  );
};
