$(function () {
  var $container = $("#container");
  var $list = $("#list");
  var $points = $("#pointsDiv>span");
  var $prev = $("#prev");
  var $next = $("#next");
  var PAGE_WIDTH = 600;
  var TIME = 400;
  var ITEM_TIME = 20;
  $next.click(function () {
    nextPage(true);
  });
  $prev.click(function () {
    nextPage(false);
  });
  function nextPage(next) {
    var offset = 0;
    var offset = next ? -PAGE_WIDTH : PAGE_WIDTH;
    var itemOffset = offset(TIME / ITEM_TIME)
    var currentLeft = $list.position().left;
    var targetLeft = currentLeft + offset
    var intervalId = setInterval(function(){
        currentLeft += itemOffset
        if(currentLeft === targetLeft) {
            clearInterval(intervalId)
        }
        $list.css("left", currentLeft);
    }, ITEM_TIME)
  }
});
