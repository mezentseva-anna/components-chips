const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [ '@storybook/addon-controls'],
  webpackFinal: async (config, { configType }) => {
    // add scss support
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}
