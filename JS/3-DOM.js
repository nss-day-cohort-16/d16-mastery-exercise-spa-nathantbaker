"use strict";

var CarLot = (function (oldCarLot) {

  oldCarLot.populatePage = function (inventory) {

    let html = "<div class='row-fluid'>",
        rowMiddle = "</div><div class='row-fluid'>",
        rowEnd = "</div>";

    for (var i = 0; i < inventory.length; i++) {

      // format price
      let price = `$${inventory[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

      html += `
        <div class="span4">
          <div class="car" id="car-${i+1}">
            <h2>${inventory[i].make} ${inventory[i].model}</h2>
            <price>${price}</price>
            <span class="pull-right">${inventory[i].year}</span>
            <p class="description">${inventory[i].description}</p>
          </div>
        </div>
      `;

      if ((i+1) % 3 === 0) { html += rowMiddle; } // ends and starts a row
    }

  html += rowEnd;
  let target = document.getElementsByClassName("container")[1];
  target.innerHTML += html; // push string to page

  // Create listeners after DOM is populated
  CarLot.activateEvents();

  };

  oldCarLot.resetCars = function () {
    let target = document.getElementsByClassName("car");
    for (var i = 0; i < target.length; i++) {
      target[i].classList.remove("border"); // remove border class from car cards
      target[i].style.backgroundColor = "white"; // set all car cards to white.
    }
  };

  oldCarLot.highlightCar = function (element, newColor) {
    let target = document.getElementById(element);
    target.classList.toggle("border");
    target.style.backgroundColor = newColor;
  };

  return oldCarLot;

})(CarLot);

// Push cars to page after JSON comes down
CarLot.loadInventory(CarLot.populatePage);


