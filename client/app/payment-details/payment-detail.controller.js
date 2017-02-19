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
    this.options = ['portfolio', 'eventlist', 'contact'];
    this.poster1 = '//in.bmscdn.com/events/eventlisting/ET00014607.jpg';
    this.poster2 = '//in.bmscdn.com/events/eventlisting/ET00049205.jpg';
    this.poster3 = '//in.bmscdn.com/events/eventlisting/ET00021361.jpg';
    this.poster4 = '//in.bmscdn.com/events/eventlisting/ET00031488.jpg';
  }

})();
