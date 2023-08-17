Feature: Test

  Scenario: test1
    Given I am a regular follower of BBC news
    When I check the home page
    Then I should able to see the latest news on the home page

  Scenario: test1
    Given I am a regular follower of BBC news
    When I check the other page
    Then I should able to see the latest news on the home page