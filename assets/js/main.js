$(document).ready(function(){
  $('.parallax').parallax();

// NAVBAR DROP DOWN BEHAVIOR --------------------------
  // COLLAPSED BAR -------------------------
  //// MOUSE OVER
  $('#collapsed-bar').on("mouseover", function(e) {
    $('#collapsed-bar').css("border", "solid 1px white");
    // Trigger unless mouse comes from DROP DOWN
    if(! $(e.fromElement).hasClass('drop-down') ) {
      $('.drop-down').slideDown();
    }
  });
  //// MOUSE OUT
  $('#collapsed-bar').on("mouseleave", function(e) {
    // Trigger unless mouse enters DROP DOWN
    if(! $(e.toElement).hasClass('drop-down') ) {
      $('.drop-down').slideUp();
      setTimeout(function() {
        $('#collapsed-bar').css("border", "none");
      }, 395);
    }
  });
  // DROP DOWN
  //// MOUSE OVER
  $('.drop-down').on("mouseover", function(e) {
    $('#collapsed-bar').css("border", "solid 1px white");
  });
  //// MOUSE OUT
  $('.drop-down').on("mouseleave", function(e) {
    // Trigger unless mouse enters COLLAPSED BAR
    if(! $(e.toElement).closest('ul').hasClass('bar') ) {
      $('.drop-down').slideUp();
      setTimeout(function() {
        $('#collapsed-bar').css("border", "none");
      }, 395);
    }
  });
// ----------------------------------------------------
});
