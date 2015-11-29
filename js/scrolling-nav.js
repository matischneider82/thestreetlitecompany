//jQuery to collapse the navbar on scroll
var anchor_offset = $('#scrollback').offset().top - 300;
$(window).scroll(function() {
  deltaT = $(window).scrollTop()

  if (deltaT > anchor_offset) {
    $("#backtt").css({"visibility": "visible",
                      "opacity": 1});
  } else {
    $("#backtt").css({"visibility": "hidden",
                      "opacity": 0});
  }

  if (deltaT > 50 && !$(".navbar-fixed-top").hasClass("top-nav-collapse")) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    $(".circlelink").addClass("circlelinksmall");
  } else
  if (deltaT < 50 && $(".navbar-fixed-top").hasClass("top-nav-collapse")){
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    $(".circlelink").removeClass("circlelinksmall");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 400, 'easeInOutExpo');
    event.preventDefault();
  });
});
