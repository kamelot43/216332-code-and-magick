'use strict';

var setup = document.querySelector('.setup');
var similarListElement = setup.querySelector('.setup-similar-list');

setup.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARD_COUTS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_GROUP = 4;

function getRandomElem(array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

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

// Работа с обработчиками событий
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var setupUserName = setup.querySelector('.setup-user-name');


setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');

  setupSubmit.addEventListener('click', function () {
    setup.classList.add('hidden');
  });

  setupSubmit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      setup.classList.add('hidden');
    }
  });


  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      setup.classList.add('hidden');
    }
  });
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.add('hidden');
  }
});
