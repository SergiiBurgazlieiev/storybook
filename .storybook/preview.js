import React from 'react';
import Center from '../src/components/center/Center';
//import { ThemeProvider } from 'styled-components';
//import { baseTheme } from '../src/ui/styles/baseTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // sort stories in alphabetical order
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  backgrounds: {
    default: 'RouteLight',
    values: [
      {
        name: 'RouteLight',
        value: '#F6F6F6'
      },
      {
        name: 'RouteDark',
        value: '#1A1A2E'
      }
    ]
  }
};

export const decorators = [
  Story => (
    // <ThemeProvider theme={baseTheme}>
    <Center>
      <Story />
    </Center>
    // </ThemeProvider>
  )
];
