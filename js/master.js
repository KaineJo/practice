function navbarChange() {
  let scroll = $(window).scrollTop();
  if(screenWidth > medium) {
    if(scroll > 0) {
      $('.nav').css('backgroundColor', 'red');
    } else {
      $('.nav').css('backgroundColor', 'transparent');
    }
  } else {
    $('.nav').css('backgroundColor', '#ffcb82');
  }
  console.log(scroll);
}

$(document).scroll(function() {
  navbarChange();
});

$(document).ready(function() {
  navbarChange();
});
