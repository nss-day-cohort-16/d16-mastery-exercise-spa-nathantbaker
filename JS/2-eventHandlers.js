"use strict";

var CarLot = (function (oldCarLot) {

  oldCarLot.activateEvents = function() {

    let input = document.getElementById("input");

    // Add Listeners For Cars
    let numCars = CarLot.getInventory().length;
    for (let i = 1; i <= numCars; i++) {
      document.getElementById(`car-${i}`).addEventListener("click", function() {
        input.value = "";
        input.focus();
        CarLot.resetCars();
        CarLot.highlightCar(`car-${i}`, "lightyellow");
      });
    }

    // Input Field Event Listener
    input.addEventListener("keyup", function() {
      let clicked = document.getElementsByClassName("border")[0];
      clicked.getElementsByClassName("description")[0].innerHTML = input.value;
      if (event.keyCode == 13) { // on enter, clear cards
      oldCarLot.resetCars();
      }
    });
  };

  return oldCarLot;

})(CarLot);