"use strict";
console.log("1 CarLot.js loads");

var CarLot = (function () {

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
    },

    // Getter to read the array of cars (e.g. getInventory).
    getInventory: function () {
      return _cars;
    }

  };

})();

console.log("CarLot iife:", CarLot);