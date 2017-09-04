'use strict';
(function () {
  var wizardCout = window.setup.querySelector('.wizard-coat');
  var coatColor = document.getElementsByName('coat-color');
  var wizardEyes = window.setup.querySelector('.wizard-eyes');
  var eyesColor = document.getElementsByName('eyes-color');
  var wizardFireball = window.setup.querySelector('.setup-fireball-wrap');

  // Изменение цвета заливки
  function getRandomFill(elem, elemValue, array) {
    var result = window.getRandomElem(array);
    elemValue.value = result;
    elem.style.fill = result;
  }

  // Изменение цвета мантии мага
  wizardCout.addEventListener('click', function () {
    getRandomFill(wizardCout, coatColor[0], window.WIZARD_COUTS);
  });

  // Изменени цвета глаз мага
  wizardEyes.addEventListener('click', function () {
    getRandomFill(wizardEyes, eyesColor[0], window.WIZARD_EYES);
  });

  // Изменени цвета глаз мага
  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = window.getRandomElem(window.WIZARD_FIREBALL);
  });
})();
