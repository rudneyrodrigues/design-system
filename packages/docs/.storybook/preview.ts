import { themes } from '@storybook/theming'
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#09090A',
        },
      ],
    },
    options: {
      storySort: {
        order: ['Docs', 'Layout', 'Form', 'Data Display', 'Typography']
      },
    },
  },
};

export default preview;
