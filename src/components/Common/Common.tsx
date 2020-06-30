import styled from '../../styled';

export const Main = styled.main(({ theme }) => ({
  margin: '110px 20px 60px 20px',

  [theme.breakpoints.desktopAndHigher]: {
    margin: '120px auto 60px auto',
    width: '70%',
  },
}));
