module.exports = {
  extends: ['next', 'prettier', 'airbnb', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'react/jsx-key': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
  },
};
