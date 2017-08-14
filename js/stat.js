"use strict";

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = "white";
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";

  ctx.fillText("Ура вы победили!", 120, 40);
  ctx.fillText("Cписок результатов :", 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeigth = 150;
  var step = histogramHeigth / (max - 0);
  ctx.textBaseline = "top";
  for (var i = 0; i < times.length; i++) {
    if (names[i] === "Вы") {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(120 + 90 * i, 250, 40, -(times[i] * step));
      ctx.fillText(names[i], 120 + 90 * i, 100 + histogramHeigth);
    } else {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(120 + 90 * i, 250, 40, -(times[i] * step));
      ctx.fillText(names[i], 120 + 90 * i, 100 + histogramHeigth);
    }
  }
};
