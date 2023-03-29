module.exports = {
  stories: [{
    directory: "../src/stories",
    titlePrefix: "MyComponents",
    files: "*.@(mdx|stories.*)"
  }],
  addons: [
  //'@storybook/addon-essentials',
  "storybook-addon-react-router-v6", 
  //'@storybook/addon-coverage',
  //'@storybook/addon-docs',
  //'@storybook/addon-controls',
  //'@storybook/addon-toolbars',
  //"@storybook/addon-mdx-gfm",
  
  {
    name: '@storybook/addon-essentials',
    options: {
      docs: false,
      background: false,
      actions: false,
      controls: true,
    },
  },
],
  babel: async options => ({
    // Update your babel configuration here
    ...options
  }),
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  webpackFinal: async (config, {
    configType
  }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
  features: {
    postcss: false
  },
  docs: {
    autodocs: true
  }
};