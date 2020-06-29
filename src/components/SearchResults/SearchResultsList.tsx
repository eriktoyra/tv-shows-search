import styled from '../../styled';

export const SearchResultsList = styled.ul(({ theme }) => ({
  margin: 20,
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  paddingInlineStart: 0,
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',

  [theme.breakpoints.tabletAndHigher]: {
    flexDirection: 'row',
    maxWidth: 1200,
    margin: '20 auto',
  },
}));
