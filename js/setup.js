'use strict';
(function () {


  window.setup.querySelector('.setup-similar').classList.remove('hidden');


  // Работа с обработчиками событий
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');
  var setupSubmit = window.setup.querySelector('.setup-submit');
  var setupUserName = window.setup.querySelector('.setup-user-name');

  // Обработчики событий вынесены в отдельные функции

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27 && setupUserName !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.classList.add('hidden');
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

  // вернуть значения по умолчанию при закрытии формы.
  setupClose.addEventListener('click', function () {
    closePopup();
    window.setup.style.top = '';
    window.setup.style.left = '';
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  });

  // валидация формы

  setupUserName.addEventListener('invalid', function () {
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


  // работа с перемещение элементов

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dotted red';
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = '';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
  });


  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });


})();
