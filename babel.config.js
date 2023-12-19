module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx', '.svg', '.webp'],
        root: ['./app/'],
        alias: {
          assets: './app/view/assets',
          images: './app/view/assets/images',
          components: './app/view/components',
          constants: './app/view/constantsStyles',
          navigator: './app/view/navigator',
          screens: './app/screens',
          utils: './app/utils',
          store: './app/store',
          modals: './app/view/modals',
          view: './app/view',
          domain: './app/domain',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
