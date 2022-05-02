Feature: Filter the products of the catalogue

Scenario: Filter products by Raquetas
  Given The main page
  When Select filter by "Raquetas" in the menu
  Then Balls shouldn´t appear in the catalogue

Scenario: Filter products by Pelotas
  Given The main page
  When Select filter by "Pelotas" in the menu
  Then Rackets shouldn´t appear in the catalogue