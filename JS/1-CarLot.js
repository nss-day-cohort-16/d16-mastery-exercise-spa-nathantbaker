"use strict";
console.log("1 CarLot.js loads");



var CarLot = (function () {
  console.log("CarLot iife:", CarLot);
  let _cars = [];

  return {
    // Pull data from JSON file
    loadInventory: function (callback) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        _cars = JSON.parse(this.responseText).cars;
        console.log("array:", _cars);
        callback(_cars);
      });

      loader.open("GET", "../JSON/inventory.json");
      loader.send();
    }
  };

})();

// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).