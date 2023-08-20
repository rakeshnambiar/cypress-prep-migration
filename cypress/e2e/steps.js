import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const getScenarioTags = () => {
  return new Cypress.Promise((resolve) => {
    const currentTestFilename = Cypress.spec.relative;
    cy.log('current test:' + currentTestFilename)
    // Load the content of the feature file
    return cy.readFile(currentTestFilename).then((featureContent) => {
      const tagMatches = featureContent.match(/@[\w-]+/g);
      cy.log('tags: ' + tagMatches)
      resolve(tagMatches)
    });
  })
}

Given('I am a regular follower of BBC news', () => {
  cy.visit('https://www.bbc.co.uk/')
})

When('I check the home page', () => {

})

Then('I should able to see the latest news on the home page', () => {

})

When('I check the other page', () => {
  expect(10).eq(20)
})

Given('I am a list of users', (datatable) => {
  cy.task('log', '' + datatable)
})