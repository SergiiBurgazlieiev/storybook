import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './baseTheme';

const {
  typography: { fonts, lineHeights }
} = baseTheme;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    font-size: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${fonts.body};
    transition: all 0.50s linear;
    line-height: ${lineHeights.base}
  }
`;
