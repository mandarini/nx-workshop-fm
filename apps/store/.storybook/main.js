const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },
  refs: {
    'ui-test': {
      title: 'Ui Test!',
      url: 'http://localhost:4401',
    },
    'ui-shared': {
      title: 'Ui Shared!',
      url: 'http://localhost:4402',
    },
  },
  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
};
