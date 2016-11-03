"use strict";
console.log("2 eventHandlers.js loads");

var CarLot = (function (oldCarLot) {


  CarLot.activateEvents = function() {

    let numCars = CarLot.getInventory().length;

    // Add Listeners For Cars
    for (let i = 1; i <= numCars; i++) {
      document.getElementById(`car-${i}`).addEventListener("click", function() {
        CarLot.resetCars();
        // Passes DOM element clicked on and background color to toggle
        CarLot.highlightCar(`car-${i}`, "lightyellow");
      });
    }

    // Input Field Event Listener
    document.getElementById("input").addEventListener("keyup", function() {
      alert("you typed in me.");
    });
  };

  return oldCarLot;

})(CarLot);

console.log("eventHandlers iife:", CarLot);