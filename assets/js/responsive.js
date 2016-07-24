$(document).ready(responsive);
$(window).on('resize', responsive);

function responsive() {
  var mq = window.matchMedia( "(min-width: 641px)" );

  if(mq.matches) {
    // window width is more than Xpx
    $('#title').html("Web Developer | Los Angeles");
  } else {
    // window width is less than Xpx
    $('#title').html("Web Developer<br>Los Angeles");
  }
}


