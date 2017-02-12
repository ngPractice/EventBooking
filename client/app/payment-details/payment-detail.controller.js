// Wrapped code inside IIFE to avoid naming collision.
(function () {
  'use strict';
  // Created controller inside eventModule.
  angular
    .module('eventModule')
    .controller('PaymentDetail', PaymentDetail);

  // add dependencies list here for safe minification code.
  PaymentDetail.$inject = [];

  // PaymentDetail controller definition.
  function PaymentDetail() {
    var vm = this;
    this.title = 'Event Booking Application';
    this.options = ['Portfolio', 'Event List', 'Contact'];
  }

})();
