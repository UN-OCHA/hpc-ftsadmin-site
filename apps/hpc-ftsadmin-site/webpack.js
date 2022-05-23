/* eslint-disable */
const path = require('path');
const upstreamConfig = require('@nrwl/react/plugins/webpack');

module.exports = (config) => {
  config = upstreamConfig(config);

  return config;
};
