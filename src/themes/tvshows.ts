export const colors = {
  primary: '#00293C',
  secondary: '#1E656D',
  tertiary: '#5AC8AC',

  white: '#FFF',

  gray30: '#B3BFC5',
  gray10: '#E6EAEC',
  gray5: '#F2F4F5',
};

export const fontStack = {
  text: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  textHeavy: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  heading1: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  heading2: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
};

export const fonts = {
  desktop: {
    xxs: `12px/16px ${fontStack.text}`,
    xs: `14px/18px ${fontStack.text}`,
    small: `16px/20px ${fontStack.text}`,
    medium: `20px/26px ${fontStack.text}`,
    large: `20px/26px ${fontStack.heading2}`,
    xl: `26px/32px ${fontStack.text}`,
    xxl: `38px/38px ${fontStack.heading1}`,
  },
  tablet: {
    small: `14px/18px ${fontStack.text}`,
    medium: `16px/22px ${fontStack.text}`,
    large: `16px/22px ${fontStack.heading2}`,
    xl: `22px/28px ${fontStack.text}`,
    xxl: `32px/32px ${fontStack.heading1}`,
  },
  mobile: {
    xs: `10px/13px ${fontStack.text}`,
    small: `12px/16px ${fontStack.text}`,
    medium: `14px/20px ${fontStack.text}`,
    large: `14px/20px ${fontStack.heading2}`,
    xl: `18px/24px ${fontStack.text}`,
    xxl: `24px/24px ${fontStack.heading1}`,
  },
};

export const breakpoints = {
  tabletAndHigher: '@media only screen and (min-width: 700px)',
  desktopAndHigher: '@media only screen and (min-width: 1025px)',
};
