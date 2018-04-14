module.exports = {
  parser: 'babel-eslint',
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
  }
};
