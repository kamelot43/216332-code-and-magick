'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф' , 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COUTS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomElem (array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

var WizardTemplate = document.querySelector('#similar-wizard-template').content;
var fragment = document.createDocumentFragment();

var wizards = [
  {
    name: getRandomElem(WIZARD_NAMES) + " " + getRandomElem(WIZARD_SURNAMES),
    coatColor: getRandomElem(WIZARD_COUTS),
    eyesColor : getRandomElem(WIZARD_EYES)
  },
  {
    name: getRandomElem(WIZARD_NAMES) + " " + getRandomElem(WIZARD_SURNAMES),
    coatColor: getRandomElem(WIZARD_COUTS),
    eyesColor : getRandomElem(WIZARD_EYES)
  },
  {
    name: getRandomElem(WIZARD_NAMES) + " " + getRandomElem(WIZARD_SURNAMES),
    coatColor: getRandomElem(WIZARD_COUTS),
    eyesColor : getRandomElem(WIZARD_EYES)
  },
  {
    name: getRandomElem(WIZARD_NAMES) + " " + getRandomElem(WIZARD_SURNAMES),
    coatColor: getRandomElem(WIZARD_COUTS),
    eyesColor : getRandomElem(WIZARD_EYES)
  }
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = WizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
