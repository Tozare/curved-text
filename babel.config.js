module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    // [
    //   "effector-logger/babel-plugin",
    //   {
    //     "inspector": true,
    //     "effector": {
    //       "reactSsr": false,
    //       "factories": ["shared/libs/effector",]
    //     }
    //   }
    // ],
    [
      "effector/babel-plugin",
      {
        factories: [
          "shared/libs/effector",
        ],
        addLoc: true,
      },
    ],
    // "@babel/plugin-transform-runtime",
    // "@babel/plugin-transform-react-display-name",
  ],
  // env: {
  //   production: {
  //     compact: true,
  //     comments: false,
  //     minified: true,
  //   },
  //   test: {
  //     plugins: ["@babel/plugin-transform-modules-commonjs"],
  //   },
  // },
  // sourceMaps: true,
};
