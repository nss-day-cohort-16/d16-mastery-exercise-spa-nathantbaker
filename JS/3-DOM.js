"use strict";
console.log("3 DOM.js loads");

var CarLot = (function (oldCarLot) {
  console.log("DOM iife:", CarLot);

return oldCarLot;

})(CarLot);

// function populatePage (inventory) {
//   // Loop over the inventory and populate the page

//   // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();
// }

// // Load the inventory and send a callback function to be
// // invoked after the process is complete
// CarLot.loadInventory();

// tempAddition += inventory[i].price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');```
