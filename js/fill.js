'use strict';
(function () {
  var wizardCout = window.setup.querySelector('.wizard-coat');
  var wizardEyes = window.setup.querySelector('.wizard-eyes');
  var wizardFireball = window.setup.querySelector('.setup-fireball-wrap');


  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  window.colorizeElement(wizardCout, window.WIZARD_COUTS, fillElement);
  window.colorizeElement(wizardEyes, window.WIZARD_EYES, fillElement);
  window.colorizeElement(wizardFireball, window.WIZARD_FIREBALL, changeElementBackground);

})();
