"use strict";
console.log("2 eventHandlers.js loads");

var CarLot = (function (oldCarLot) {

  CarLot.activateEvents = function() {

    // Add Listeners For Cars
    let numCars = CarLot.getInventory().length;
    for (let i = 1; i <= numCars; i++) {
      document.getElementById(`car-${i}`).addEventListener("click", function() {
        CarLot.resetCars();
        CarLot.highlightCar(`car-${i}`, "lightyellow");
      });
      console.log("card");
    }

    // Input Field Event Listener
    input.addEventListener("keyup", function() {
      let input = document.getElementById("input");
      let clicked = document.getElementsByClassName("border")[0];
      clicked.getElementsByClassName("description")[0].innerHTML = input.value;
    });
  };

  return oldCarLot;

})(CarLot);

console.log("eventHandlers iife:", CarLot);