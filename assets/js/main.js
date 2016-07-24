$(document).ready(function(){
  $('.parallax').parallax();

  $('#collapsed-bar').on("mouseover", function() {
    $('#collapsed-bar').css("background", "#ba863f");
    $('.drop-down').css("display", "block");
  });
  $('.drop-down').on("mouseover", function() {
    $('#collapsed-bar').css("background", "#ba863f");
    $('.drop-down').css("display", "block");
  });
  $('#collapsed-bar').on("mouseleave", function() {
    $('#collapsed-bar').css("background", "#ce9546");
    $('.drop-down').css("display", "none");
  });
  $('.drop-down').on("mouseleave", function() {
    $('#collapsed-bar').css("background", "#ce9546");
    $('.drop-down').css("display", "none");
  });
});
