const webpack = require('webpack');
const path = require('path');

const rules = [
  {
    test: /\.js$/,
    include: __dirname + '/app',
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/env', '@babel/react'],
      plugins: ['@babel/transform-spread', '@babel/proposal-class-properties']
    }
  },
  {
    test: /\.(jpg|png|gif|svg)$/,
    include: __dirname + '/app',
    loader: 'url-loader',
    query: {
      name: '[path][name].[ext]',
      limit: 25000
    }
  },
];

const getPlugins = options => {
  const plugins = [];

  plugins.push(new webpack.ProvidePlugin({
    'React': 'react',
    'PropTypes': 'prop-types',
  }));

  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(options.mode)
    },
  }));

  return plugins;
};

const extensions = ['.js'];

module.exports = (env, options) => {
  return  {
    entry: ['@babel/polyfill', __dirname + '/app'],
    plugins: getPlugins(options),
    output: {
      path: __dirname + '/public/build',
      filename: 'build.js',
      publicPath: '/build/'
    },
    module: {
      rules,
    },
    resolve: {
      extensions,
    },
  };
};
