import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from '../components/code-theme';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/gm, '');
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          // className={className}
          className="border border-red-400"
          style={{
            margin: '16px 0',
            borderRadius: 8,
            borderColor: '#232323',
            borderStyle: 'solid',
            borderWidth: '1px'
          }}
        >
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
