"use strict";
console.log("2 eventHandlers.js loads");

var CarLot = (function (oldCarLot) {


  CarLot.activateEvents = function() {
    // alert("create event listeners");
  };

  return oldCarLot;

})(CarLot);

// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.

console.log("eventHandlers iife:", CarLot);