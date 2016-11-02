"use strict";
console.log("3 DOM.js loads");

var CarLot = (function (oldCarLot) {
  console.log("DOM iife:", CarLot);

  CarLot.populatePage = function (inventory) {
  alert("pushed cars to page");
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
  }

return oldCarLot;

})(CarLot);




// // Load the inventory and send a callback function to be
// // invoked after the process is complete
CarLot.loadInventory();

let thing = CarLot.getInventory();
console.log("CarLot.getInventory:", thing);

// tempAddition += inventory[i].price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');```
