'use strict';
(function () {

  function getRandomElem(array) {
    var rand = Math.floor(Math.random() * array.length);
    return array[rand];
  }

  window.colorizeElement = function (param, array, test, cb) {
    test = getRandomElem(array);
    cb(param, test);
    return test;
  };


})();
