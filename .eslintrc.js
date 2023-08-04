module.exports = {
    parser: 'babel-eslint',
    plugins: ['react', 'prettier'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
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
  