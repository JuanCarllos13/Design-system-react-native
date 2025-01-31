module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@styles': './src/styles', // Ajuste para o caminho correto
        },
      },
    ],
  ],
};
