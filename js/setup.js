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

var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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

// Обработчики событий вынесены в отдельные функции

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27 && setupUserName != document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupSubmit.addEventListener('click', function () {
  if (setupUserName.validity.valid) {
    closePopup();
  }
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (setupUserName.validity.valid && evt.keyCode === 13) {
    closePopup();
  }
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

// валидация формы

setupUserName.addEventListener('invalid', function (evt) {
  if (!setupUserName.validity.valid) {
    if (setupUserName.validity.tooShort) {
      setupUserName.setCustomValidity(
          'Имя должно состоять минимум из 2-х символов'
      );
    } else if (setupUserName.validity.tooLong) {
      setupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (setupUserName.validity.valueMissing) {
      setupUserName.setCustomValidity('Обязательное поле');
    } else {
      setupUserName.setCustomValidity('');
    }
  }
});

// Изменение цвета заливки
function getRandomFill(elem, elemValue, array) {
  var result = getRandomElem(array);
  elemValue.value = result;
  elem.style.fill = result;
}

var wizardCout = setup.querySelector('.wizard-coat');
var coatColor = document.getElementsByName('coat-color');
var wizardEyes = setup.querySelector('.wizard-eyes');
var eyesColor = document.getElementsByName('eyes-color');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

// Изменение цвета мантии мага
wizardCout.addEventListener('click', function () {
  getRandomFill(wizardCout, coatColor[0], WIZARD_COUTS);
});

// Изменени цвета глаз мага
wizardEyes.addEventListener('click', function () {
  getRandomFill(wizardEyes, eyesColor[0], WIZARD_EYES);
});

// Изменени цвета глаз мага
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = getRandomElem(WIZARD_FIREBALL);
});
