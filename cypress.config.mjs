import { defineConfig } from 'cypress'
import preprocessor from '@badeball/cypress-cucumber-preprocessor'
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify'
import _ from 'lodash'
import {deleteAsync} from 'del';
const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('after:spec', (spec, results) => {
    if (results && results.video) {
      // Do we have failures for any retry attempts?
      const failures = _.some(results.tests, (test) => {
        return _.some(test.attempts, { state: 'failed' })
      })
      if (!failures) {
        // delete the video if the spec passed and no tests retried
        return deleteAsync(results.video)
      }
    }
  })
  on('task', {
    log(message) {
      console.log(message)
      return null
    },
  })
  on(
      'file:preprocessor',
 /*     createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }),*/
      browserify.default(config),
  );
  return config;
};


export default defineConfig({
  viewportWidth: 1540, //1920 x 1080 local system
  viewportHeight: 968,  // old 1440 / 868
  defaultCommandTimeout: 60000,
  chromeWebSecurity: false,
  fixturesFolder: false,
  retries: {
    "runMode": 1,
    "openMode": 0
  },
  experimentalModifyObstructiveThirdPartyCode: false, // it was true earlier
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  watchForFileChanges: false,
  e2e: {
    hideXHRInCommandLog: false,
    setupNodeEvents,
    specPattern: '**/*.feature',
    excludeSpecPattern: ['*.js'],
  },
  compilerOptions: {
    types: ["cypress", "cypress-wait-until"]
  }
});