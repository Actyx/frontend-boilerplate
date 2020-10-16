/* eslint-disable @typescript-eslint/no-var-requires */
const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
  getCompareSnapshotsPlugin(on, config);
};
