let scroll;
function changeTheme() { //Changes color of navbar on scroll down
  console.log( $('.nav').height());
  console.log(scroll);
  if(screenWidth > large) {
    if(scroll >= $('.nav').height()) {
      $('.nav').css('backgroundColor', '#ffcb82');
      $('.nav-items').css('backgroundColor', '#ffcb82');
    } else {
      $('.nav').css('backgroundColor', 'transparent');
      $('.nav-items').css('backgroundColor', 'transparent');
    }
  } else if(screenWidth > medium && screenWidth < large) {
    if(scroll >= ($('.nav').height() + $('.nav-items').height())) {
      $('.nav').css('backgroundColor', '#ffcb82');
      $('.nav-items').css('backgroundColor', '#ffcb82');
    } else {
      $('.nav').css('backgroundColor', 'transparent');
      $('.nav-items').css('backgroundColor', 'transparent');
    }
  } else {
    $('.nav').css('backgroundColor', '#ffcb82');
    $('.nav-items').css('backgroundColor', '#4d4d4d');
  }
};

$(window).scroll(function() {
  scroll = $(window).scrollTop();
  changeTheme();
});

$(window).resize(function() {
  changeTheme();
});

$(document).ready(function() {
  changeTheme();
});
