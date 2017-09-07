'use strict';
(function () {
  var WizardTemplate = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();
  window.setup = document.querySelector('.setup');
  var similarListElement = window.setup.querySelector('.setup-similar-list');


  function renderWizard(wizard) {
    var wizardElement = WizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  window.render = function (data) {
    similarListElement.innerHTML = '';
    for (var i = 0; i < window.WIZARD_GROUP; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
    window.setup.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
