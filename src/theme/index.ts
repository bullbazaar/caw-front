import { extendTheme } from '@chakra-ui/react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import components from './components';

const tailwind = resolveConfig(tailwindConfig);

const config = {
  useSystemColorMode: true,
  initialColorMode: 'light',
  cssVarPrefix: 'teh',
  colorSchema: 'caw',
  theme: 'caw',
};

const fonts = {
  heading: 'Work Sans, system-ui, sans-serif',
  body: 'Inter, system-ui, sans-serif',
  mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
};

// NOTE: tailwindcss and chakra-ui have same values
// for spacing, breakpoints etc. and can be used together.
// Colors are defined in `tailwind.config.js`

export const theme = {
  direction: 'ltr',
  colors: tailwind.theme.colors,
  fonts,
  config,
  components,
  styles: {
    global: () => ({
      body: {
        bg: 'gray.50',
      },
    }),
  },
};

export default extendTheme(theme);
