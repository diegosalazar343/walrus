$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".dog").click(function() {
    $("#dog-hidden").fadeToggle();
    $("#dog-showing").fadeToggle();
  });
});
