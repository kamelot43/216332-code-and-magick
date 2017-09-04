'use strict';
(function () {

  window.setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  window.WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  window.WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
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

  window.getRandomElem = function (array) {
    var rand = Math.floor(Math.random() * array.length);
    return array[rand];
  };

  var WizardTemplate = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();

  function createWizards(param) {
    var wizards = [];
    for (var i = 0; i < param; i++) {
      wizards[i] = {
        name: getRandomElem(WIZARD_NAMES) + ' ' + getRandomElem(WIZARD_SURNAMES),
        coatColor: getRandomElem(WIZARD_COUTS),
        eyesColor: getRandomElem(WIZARD_EYES)
      };
    }
    return wizards;
  }

  var wizards = createWizards(WIZARD_GROUP);

  function renderWizard(wizard) {
    var wizardElement = WizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);

})();
