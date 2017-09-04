'use strict';
(function () {

  function getRandomElem(array) {
    var rand = Math.floor(Math.random() * array.length);
    return array[rand];
  }

  window.colorizeElement = function (param, array, cb) {
    param.addEventListener('click', function () {
      var color = getRandomElem(array);
      cb(param, color);
    });
  };


})();
