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
          price = inventory[i].price, // need to format for dollars
          description = inventory[i].description;

      html += `
        <div class="span4">
          <div class="car" id="car-${i}">
            <h2>${make} ${model}</h2>
            <price>${price}</price>
            <p>${year} — ${description}</p>
          </div>
        </div>
      `;
      if ((i+1) % 3 === 0) { html += rowMiddle; } // ends and starts a row
    }

  html += rowEnd;
  console.log("html:", html);

  let target = document.getElementsByClassName("container")[1];
  target.innerHTML += html;

  // Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of container.

  // Hint: You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.


  // Create listeners after DOM is populated
  CarLot.activateEvents();

  };

  return oldCarLot;

})(CarLot);




// // Load the inventory and send a callback function to be
// // invoked after the process is complete
CarLot.loadInventory(CarLot.populatePage);

console.log("DOM iife:", CarLot);

// tempAddition += inventory[i].price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');```