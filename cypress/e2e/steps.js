import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


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