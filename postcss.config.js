module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    'postcss-mixins',
    'postcss-import',
    'postcss-simple-vars',
    'postcss-nested',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          grid: false,
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
};
