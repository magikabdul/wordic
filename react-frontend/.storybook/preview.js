import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon/dist/preview';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/darkTheme';
import GlobalStyles from '../src/theme/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withThemes(ThemeProvider, [theme]));
addDecorator(s => <><GlobalStyles theme={theme}/>{s()}</>);
