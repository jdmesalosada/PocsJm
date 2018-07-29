Feature: User is able to navigate through the application

  In order to focus on things that matter
  James would like to navigate through the application
  to validate it is working as expected

Scenario: Unsuccesful login

Given that James opens the Login page
When he enters a wrong credentials
Then he should be warned about the invalid credentials