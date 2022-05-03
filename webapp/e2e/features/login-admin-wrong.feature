Feature: Try to log as an admin

Scenario: Login with a no admin account
  Given The main page
  When Try to login as an admin
  Then The login does not work