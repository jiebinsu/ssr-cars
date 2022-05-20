module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3,
          targets: "> 0.1%, not dead",
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: [],
  };
};
