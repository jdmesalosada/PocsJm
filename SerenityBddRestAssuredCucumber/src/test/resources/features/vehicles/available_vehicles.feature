Feature: Look for available vehicles
 Users need to be able to find which vehicles are available for purchase

Scenario: Get available vehicles
 Given Juan wants to purchase a vehicle
 When he looks the available vehicles
 Then he must see which vehicles are available

Scenario: Get available vehicles by Id
  Given Juan wants to purchase a vehicle
  When he looks the available vehicles by Id
  Then he must see the vehicle that match with that Id