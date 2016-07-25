$(document).ready(function(){
  $('.parallax').parallax();


// NAVBAR DROP DOWN BEHAVIOR --------------------------
  $('#collapsed-bar').on("mouseover", function(e) {
    $('#collapsed-bar').css("background", "#ba863f");
    if(! $(e.fromElement).hasClass('drop-down') ) {
      $('.drop-down').slideDown();
    }
  });
  $('#collapsed-bar').on("mouseleave", function(e) {
    $('#collapsed-bar').css("background", "#ce9546");
    if(! $(e.toElement).hasClass('drop-down') ) {
      $('.drop-down').slideUp();
    }
  });
  $('.drop-down').on("mouseover", function(e) {
    $('#collapsed-bar').css("background", "#ba863f");
  });
  $('.drop-down').on("mouseleave", function(e) {
    $('#collapsed-bar').css("background", "#ce9546");
    if(! $(e.toElement).closest('ul').hasClass('bar') ) {
      $('.drop-down').slideUp();
    }
  });
// ----------------------------------------------------
});
