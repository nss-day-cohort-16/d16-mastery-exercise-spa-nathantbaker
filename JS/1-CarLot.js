"use strict";
console.log("1 CarLot.js loads");

var CarLot = (function () {
  console.log("CarLot iife:", CarLot);
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {

      });
    }
  };

})();

// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).