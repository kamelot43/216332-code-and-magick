'use strict';
(function () {

  window.colorizeElement = function (param, array, cb) {
    param.addEventListener('click', function () {
      var color = window.getRandomElem(array);
      cb(param, color);
    });
  };


})();
