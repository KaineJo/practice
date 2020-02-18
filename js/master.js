function changeTheme() { //Changes color of navbar on scroll down
  if(screenWidth > large) {
    if(scroll >= $('.nav').height()) {
      $('.nav').css('backgroundColor', '#0e1221');
      $('.nav-items').css('backgroundColor', 'transparent');
    } else {
      $('.nav').css('backgroundColor', 'rgba(14,18,33,0.56)');
      $('.nav-items').css('backgroundColor', 'transparent');
    }
  } else if(screenWidth > medium && screenWidth < large) {
    if(scroll >= ($('.nav').height() + $('.nav-items').height())) {
      $('.nav').css('backgroundColor', '#0e1221');
      $('.nav-items').css('backgroundColor', '#0e1221');
    } else {
      $('.nav').css('backgroundColor', 'rgba(14,18,33,0.56)');
      $('.nav-items').css('backgroundColor', 'rgba(14,18,33,0.56)');
    }
  } else {
    $('.nav').css('backgroundColor', '#0e1221');
    $('.nav-items').css('backgroundColor', '#0e1221');
  }
};

$(document).scroll(function() {
  changeTheme();
});

$(document).ready(function() {
  changeTheme();
});
