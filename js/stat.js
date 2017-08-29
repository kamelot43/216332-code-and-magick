'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Cписок результатов :', 120, 60);

  var max = -1;
  var maxIndex = -1;
  var rand = Math.random().toFixed(2);
  var initialX = 120;
  var initialY = 90;
  var barWidth = 40;
  var timeInitialY = 80;
  var histogramInitialY = 250;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeigth = 150;
  var step = histogramHeigth / (max - 0);
  var nameInitialY = histogramHeigth + 100;
  ctx.textBaseline = 'top';
  for (var i = 0; i < times.length; i++) {
    var rand = Math.random().toFixed(2);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, " + rand + ")';
    }
    ctx.fillRect(
        initialX + initialY * i,
        histogramInitialY,
        barWidth,
        -(times[i] * step)
    );
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], initialX + initialY * i, nameInitialY);
    ctx.fillText(
        parseInt(times[i]),
        initialX + initialY * i,
        timeInitialY + histogramHeigth - times[i] * step
    );
  }
};
