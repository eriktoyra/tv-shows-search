import styled from '../../styled';

export const Main = styled.main(({ theme }) => ({
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
