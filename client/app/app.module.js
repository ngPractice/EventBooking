// Wrapped code inside IIFE function to avoid naming collision.
(function () {
  'use strict';
  var dependencies = [
    'ngMaterial'
  ];
  // Created eventModule module here which is main module
  // of Event Booking applicaiton.
  angular
    .module('eventModule', dependencies);
})();