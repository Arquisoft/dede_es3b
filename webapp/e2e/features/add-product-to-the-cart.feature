Feature: Adding a product to the cart

Scenario: The user is registered in the site
  Given A registered user
  When I add a product to the cart 
  Then It should be in the cart menu