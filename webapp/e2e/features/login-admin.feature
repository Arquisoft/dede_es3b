Feature: Login as an admin

Scenario: Login as an admin
  Given The main page
  When Try to login as an admin
  Then The login works

Scenario: Login with a no admin account
  Given The main page
  When Try to login as an admin
  Then The login does not work