import styled from '../../styled';

export const ShowDetailsPoster = styled.img(({ theme }) => ({
  border: `5px solid ${theme.colors.gray30}`,
  boxSizing: 'border-box',
  width: '25%',

  [theme.breakpoints.tabletAndHigher]: {
    borderWidth: 10,
    width: '100%',
  },
}));

export const ShowDetailsSummary = styled.div(({ theme }) => ({
  color: theme.colors.primary,
}));

export const ShowDetailsTitle = styled.h2(({ theme }) => ({
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
