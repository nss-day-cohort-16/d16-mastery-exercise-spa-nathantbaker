"use strict";
console.log("3 DOM.js loads");

var CarLot = (function (oldCarLot) {

  CarLot.populatePage = function (inventory) {

    let html = "<div class='row-fluid'>",
        rowMiddle = "</div><div class='row-fluid'>",
        rowEnd = "</div>";

    for (var i = 0; i < inventory.length; i++) {

      let make = inventory[i].make,
          model = inventory[i].model,
          year = inventory[i].year,
          price = inventory[i].price,
          description = inventory[i].description;
          price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //add commas

      html += `
        <div class="span4">
          <div class="car" id="car-${i}">
            <h2>${make} ${model}</h2>
            <price>$${price}</price>
            <p>${year} — ${description}</p>
          </div>
        </div>
      `;
      if ((i+1) % 3 === 0) { html += rowMiddle; } // ends and starts a row
    }

  html += rowEnd;

  let target = document.getElementsByClassName("container")[1];
  target.innerHTML += html;

  // Create listeners after DOM is populated
  CarLot.activateEvents();

  };

  CarLot.highlightCar = function (border, color) {
    alert("you clicked a car");
  };

  CarLot.resetCars = function () {

  };

  return oldCarLot;

})(CarLot);

// // Load the inventory and send a callback function to be
// // invoked after the process is complete
CarLot.loadInventory(CarLot.populatePage);

console.log("DOM iife:", CarLot);


