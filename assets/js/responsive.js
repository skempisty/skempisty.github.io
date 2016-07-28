$(document).ready(responsive);
$(window).on('resize', responsive);

function responsive() {
  var break1 = window.matchMedia( "(min-width: 993px)" );
  var break2 = window.matchMedia( "(min-width: 641px)" );
  var break3 = window.matchMedia( "(min-width: 426px)" );

  if(break1.matches) {
    // window width is more than Xpx
  } else {
    // window width is less than Xpx
  }

  if(break2.matches) {
    // window width is more than Xpx
    $('#title').html("Web Developer | Los Angeles");
    $('#full-bar').css("display", "inline");
    $('#collapsed-bar').css("display", "none");
  } else {
    // window width is less than Xpx
    $('#full-bar').css("display", "none");
    $('#collapsed-bar').css("display", "inline");
    $('#title').html("Web Developer<br>Los Angeles");
  }

  if(break3.matches) {
    // window width is more than Xpx
    $('#name').html("S T E P H E N K");
  } else {
    $('#name').html("S T E V E K");
    // window width is less than Xpx
  }
}


