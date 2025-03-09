// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Add resolution for url-parse
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'url-parse': require.resolve('url-parse'),
};

module.exports = config;