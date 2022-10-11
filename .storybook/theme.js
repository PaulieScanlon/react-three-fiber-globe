import { create } from '@storybook/theming';

const theme = {
  colorPrimary: '#DBD2BD',
  colorSecondary: '#656052',

  // UI
  appBg: 'black',
  appContentBg: 'black',
  appBorderColor: '#232323',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#FCF3E4',
  textInverseColor: '#262626',

  // Toolbar default and active colors
  barTextColor: '#DBD2BD',
  barSelectedColor: '#00ff33',
  barBg: 'black',

  // Form colors
  inputBg: '#121212',
  inputBorder: '#232323',
  inputTextColor: '#262626',
  inputBorderRadius: 4,

  brandTitle: 'R3F Globe',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150',
  brandTarget: '_self'
};

export default create(theme);
