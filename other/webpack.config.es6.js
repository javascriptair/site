/* eslint-env node */
/* eslint max-len:[2, 200] */
const packageJson = require('../package.json');

const here = require('path-here');
const _ = require('lodash');
const webpack = require('webpack');
const deindent = require('deindent');
const WebpackNotifierPlugin = require('webpack-notifier');

const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const csstyle = require('csstyle');
const postcssFor = require('postcss-for');

module.exports = getConfig();

function getConfig() {
  let config = getCommonConfig();

  switch (process.env.NODE_ENV) {
    case 'development':
      config = _.merge(config, getDevConfig());
      break;
    case 'production':
      config = _.merge(config, getProdConfig());
      break;
    case 'test':
      config = _.merge(config, getTestConfig());
      break;
    default:
      throw new Error(`NODE_ENV not equal to development, production, or test. It is equal to ${process.env.NODE_ENV}`);
  }
  return config;
}


function getCommonConfig() {
  return {
    context: here('app'),
    entry: './index.js',
    output: {
      filename: 'bundle.js'
    },
    stats: {
      colors: true,
      reasons: true
    },
    resolve: {
      extensions: ['', '.js'],
      modulesDirectories: ['shared', 'node_modules']
    },
    eslint: {
      emitError: true,
      failOnError: true,
      failOnWarning: false,
      quiet: true
    }
  };
}

function getDevConfig() {
  return {
    output: {path: here('app')},
    devtool: 'eval',
    module: {
      loaders: _.flatten([
        getJavaScriptLoader(),
        getCommonLoaders()
      ])
    },
    plugins: getCommonPlugins(),
    postcss() {
      return [postcssFor, autoprefixer, postcssNested, csstyle];
    },
    eslint: {
      failOnError: false
    }
  };
}

function getProdConfig() {
  return {
    output: {path: here('dist')},
    devtool: 'source-map',
    module: {
      loaders: _.flatten([
        getJavaScriptLoader(),
        getCommonLoaders()
      ])
    },
    plugins: _.union(getCommonPlugins(), [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ])
  };
}

function getTestConfig() {
  const coverage = process.env.COVERAGE === 'true';
  const ci = process.env.CI === 'true';
  return {
    entry: './index.test.js',
    module: {
      loaders: _.flatten([
        coverage ? getCoverageLoaders() : getJavaScriptLoader(),
        getCommonLoaders()
      ])
    },
    devtool: 'eval',
    plugins: getCommonPlugins(),
    eslint: {
      emitError: ci,
      failOnError: ci
    }
  };

  function getCoverageLoaders() {
    return [
      {
        test: /\.test\.js$|\.mock\.js$/, // include only mock and test files
        loaders: ['babel', 'eslint?configFile=./other/test.eslintrc'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['isparta', 'eslint?configFile=./other/app.eslintrc'],
        exclude: /node_modules|\.test.js$|\.mock\.js$/ // exclude node_modules and test files
      }
    ];
  }
}


function getJavaScriptLoader() {
  return {test: /\.js$/, loaders: ['babel', 'eslint?configFile=./other/app.eslintrc'], exclude: /node_modules/};
}

function getCommonLoaders() {
  const exclude = /node_modules/;
  return [
    // raw css
    {test: /\.raw\.css$/, loaders: ['style', 'css'], exclude},
    {test: /\.css$/, loaders: ['style', 'css'], include: /node_modules/},

    // csstyle
    {test: /\.tweaks.css$/, loaders: ['style', 'css', 'postcss'], exclude},

    // css modules
    {test: /\.css$/, loaders: ['style', 'css?modules', 'postcss'], exclude: /node_modules|\.raw\.|\.tweaks\./},

    // html templates
    {test: /\.html$/, loaders: ['raw'], exclude},

    // resources
    {test: /\.png$/, loaders: ['url?mimetype=image/png']}
  ];
}

function getCommonPlugins() {
  return _.filter([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      VERSION: JSON.stringify(packageJson.version)
    }),
    process.env.CI ? undefined : new WebpackNotifierPlugin({
      title: 'Send Money',
      contentImage: here('other/logo.png')
    })
  ]);
}

