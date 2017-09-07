'use strict';
(function () {


  window.WIZARD_COUTS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  window.WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  window.WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  window.WIZARD_GROUP = 4;

  // экспортировано из fill.js
  var wizardCout = window.setup.querySelector('.wizard-coat');
  var wizardEyes = window.setup.querySelector('.wizard-eyes');
  var wizardFireball = window.setup.querySelector('.setup-fireball-wrap');


  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  var eyesColor;
  wizardEyes.addEventListener('click', function () {
    eyesColor = window.colorizeElement(wizardEyes, window.WIZARD_EYES, eyesColor, fillElement);

  });

  var coatColor;
  wizardCout.addEventListener('click', function () {
    coatColor = window.colorizeElement(wizardCout, window.WIZARD_COUTS, coatColor, fillElement);
  });


  var fireballColor;
  wizardFireball.addEventListener('click', function () {
    window.colorizeElement(wizardFireball, window.WIZARD_FIREBALL, fireballColor, changeElementBackground);
  });


  var wizards = [];

  var updateWizards = function () {
    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor;
    });
    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === eyesColor;
    });

    window.render(sameCoatWizards.concat(sameEyesWizards).concat(wizards));
  };

  var onSuccess = function (data) {
    window.render(data);
    wizards = data;
  };

  window.backend.load(onSuccess, window.backend.error);

})();
