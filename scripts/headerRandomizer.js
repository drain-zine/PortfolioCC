export function setRandomPos(elements, dx, dy, x, y) {
  var boxDims = new Array();
  var timeout_iters = 10;
  var timeout = false;

  do {
    elements.each(function () {
      var fixLeft = 0;
      var fixTop = 0;
      var conflict = true;
      var t = 0;
      timeout = false;

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
            t++;
            break;
          } else {
            conflict = false;
          }
        }

        // catch timeout
        if (t > timeout_iters) {
          timeout = true;
          //console.log("Timing out...")
          break;
        }
      }

      // reset elems on timeout, try again
      if (timeout) {
        boxDims = [];
        return false;
      } else {
        boxDims.push($(this)[0]);
      }
    });
  } while (timeout);
}

function overlap(rect1, rect2) {
  //console.log("checking overlap");

  return !(
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right
  );
}
