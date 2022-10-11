import React from 'react';
import theme from './theme';

import CodeBlock from '../components/code-block';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    components: {
      code: ({ children, className }) => {
        return <CodeBlock className={className}>{children}</CodeBlock>;
      }
    },

    theme: {
      ...theme
    }
  }
};

export const decorators = [
  (Story) => (
    <div style={{ height: 300 }}>
      <Story />
    </div>
  )
];
