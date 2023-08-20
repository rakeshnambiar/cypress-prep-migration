@Batch1
Feature: Test

  @test1
  Scenario: test1
    Given I am a regular follower of BBC news
    When I check the home page
    Then I should able to see the latest news on the home page

#  @test2
#  Scenario: test2
#    Given I am a regular follower of BBC news
#    When I check the other page
#    Then I should able to see the latest news on the home page
#
#  @test3
#  Scenario: test3
#    Given I am a list of users
#      | user1 | user2 |
#    When I check the other page
#    Then I should able to see the latest news on the home page