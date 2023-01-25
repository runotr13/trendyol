const path = require('path')

module.exports = {
  reactScriptsVersion: 'react-scripts',
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: ['node_modules', 'src/assets/scss'],
        },
      },
    },
    // postcss: {
    //   plugins: [require('postcss-rtl')()],
    // },
  },
  webpack: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
}
