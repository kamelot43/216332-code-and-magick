'use strict';
(function () {

  window.setup = document.querySelector('.setup');
  var similarListElement = window.setup.querySelector('.setup-similar-list');

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

  var WizardTemplate = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();


  function renderWizard(wizard) {
    var wizardElement = WizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  var onSuccess = function (wizards) {

    for (var i = 0; i < window.WIZARD_GROUP; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    window.setup.querySelector('.setup-similar').classList.remove('hidden');

  };

  window.backend.load(onSuccess, window.backend.error);

})();
