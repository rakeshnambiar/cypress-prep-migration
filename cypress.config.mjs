import { defineConfig } from 'cypress'
import preprocessor from '@badeball/cypress-cucumber-preprocessor'
// import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
// import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild.js'
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify.js'
const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  //on("file:preprocessor", browserify.default(config));
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