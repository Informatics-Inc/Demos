$(function () {

  $(window).on("scroll", function () {

    if ($(window).scrollTop() > 20) {
      $(".main-nav").addClass("scrolled");
    } else {
      $(".main-nav").removeClass("scrolled");
    }

  });

});