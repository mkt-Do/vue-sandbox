const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
      path: path.join(__dirname, '/dist/js'),
      publicPath: '/dist/static',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
          options: {
            loaders: {
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: [ 'style-loader', 'css-loader' ],
        },
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 3000,
    },
    devtool: 'cheap-module-eval-sourcemap',
    resolve: {
      extensions: [ '.js', '.vue' ],
      alias: {
        'vue$': 'vue/dist/vue.js',
      },
    },
  },
];

