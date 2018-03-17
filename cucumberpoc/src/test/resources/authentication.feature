Feature: User is able to login into the application

  Scenario: Log into application with valid credentials
    Given that Julian wants to log in in order to manage his products
    When he send the information required to log in
    Then he should be given access to manage his products