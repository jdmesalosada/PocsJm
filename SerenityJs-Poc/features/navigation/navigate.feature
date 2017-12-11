Feature: User is able to navigate through the application

  In order to focus on things that matter
  James would like to navigate through the application
  to validate it is working as expected

#Scenario: Log in into the application
#
#    Given that James opens the Login page
#    And he writes the username XXXXX@carnival.com
#    And he writes the password XXXX
#    When he clicks the Log in button
#   Then his must be redirected to the Home Page

Scenario: Log into application with Builder

Given that James opens the Login page
When he login into the application
Then he must be redirected to the Home Page