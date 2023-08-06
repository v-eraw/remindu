module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react', 'prettier'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
  },
  extends: ['next', 'eslint:recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
