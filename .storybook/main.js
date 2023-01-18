module.exports = {
    stories: [
      {
        // 👇 The directory field sets the directory your stories
        directory: '../src/stories',
        // 👇 The titlePrefix field will generate automatic titles for your stories
        titlePrefix: 'MyComponents',
        // 👇 Storybook will load all files that contain the stories extension
        files: '*.stories.*',
      },
    ],

    addons: [
        '@storybook/addon-essentials',
        "storybook-addon-react-router-v6"
    ],

    babel: async (options) => ({
        // Update your babel configuration here
        ...options,
      }),
      
    framework: '@storybook/react',

    webpackFinal: async (config, { configType }) => {
        // Make whatever fine-grained changes you need
        // Return the altered config
        return config;
      },

  };