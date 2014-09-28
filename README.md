Angular Directives Communication
================================

Angular.js demo showing parent-children-sibling directives communicating

The parent directive (itemManager) acts as the communication traffic manager between the two sibling directives (itemListNormal and itemEditor).

By exposing its own controller's methods to both children, the itemManager provides and API through which they can communicate with each other. In this case that communication is editing an item and having the updated contents display in the list.

This demo is currently using angular.js v1.3.0-rc3
