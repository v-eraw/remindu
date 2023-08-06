module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react', 'prettier'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
  },
  extends: [
    'next',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    // Add more rules or overrides as needed
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
