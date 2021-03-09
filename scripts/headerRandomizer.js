export function setRandomPos(elements, dx, dy, x, y) {
  var boxDims = new Array();

  elements.each(function () {
    var conflict = true;
    var fixLeft = 0;
    var fixTop = 0;

    while (conflict) {
      fixLeft = Math.abs(Math.round(Math.random() * dx) + x);
      fixTop = Math.abs(Math.round(Math.random() * dy) + y);

      $(this).css("top", fixTop);
      $(this).css("left", fixLeft);

      var rect1 = $(this)[0].getBoundingClientRect();

      conflict = false;
      for (var i = 0; i < boxDims.length; i++) {
        var rect2 = boxDims[i].getBoundingClientRect();
        if (overlap(rect1, rect2)) {
          conflict = true;
          break;
        } else {
          conflict = false;
        }
      }
    }
    boxDims.push($(this)[0]);
  });
}

function overlap(rect1, rect2) {
  //console.log("checking overlap");

  console.log(
    "Dims (t,b,r,l): (" +
      rect1.top +
      "," +
      rect1.bottom +
      "," +
      rect1.right +
      "," +
      rect1.left +
      "), (" +
      rect2.top +
      "," +
      rect2.bottom +
      "," +
      rect2.right +
      "," +
      rect2.left +
      ")"
  );

  return !(
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right
  );
}
