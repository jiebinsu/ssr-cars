module.exports = {
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "prettier",
  ],
  rules: {
    "no-underscore-dangle": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/webpack.*.config.*.js"] },
    ],
  },
  parser: "babel-eslint",
  plugins: ["jest"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
