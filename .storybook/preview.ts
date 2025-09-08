import type { Preview } from '@storybook/react-vite';

// @ts-ignore
import '../src/shared/styles/index.scss';

import { themes } from 'storybook/theming';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';

const preview: Preview = {
  globalTypes: {
    parameters: {
      docs: {
        theme: themes.dark,
      },
      backgrounds: {
        default: 'dark',
        values: [
          {
            name: 'dark',
            value: '#110f10',
          },
          {
            name: 'page',
            value: '#171a1e',
          },
        ],
      },
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/i,
        },
      },
      viewport: {
        options: MINIMAL_VIEWPORTS,
      },
    },
  },
};

export default preview;
