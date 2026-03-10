// -- SCROLL EVENTS -- //

$('.menu-toggle').on('click', function() {
  $('.menu-main').toggleClass('active');
});

  // jQuery scroll event
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
    var x = $(this).scrollTop();
    $(".page-header figure img").css(
      "-webkit-transform",
      "translateY(" + x / 6 + "px)"
    );
    $(".bkg-texture").css(
      "-webkit-transform",
      "translateY(" + x / 8 + "px)"
    );
  });

  // -- ANIMATE IN TO VIEW -- //
  var $animation_elements = $(".animate-in, .btn-text, .fade-in");
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;

      // Check to see if this current container is within the viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass("visible");
      } else {
        $element.removeClass("visible"); // Remove the "visible" class if out of view
      }
    });
  }
  $window.on("scroll resize", check_if_in_view);
  $window.trigger("scroll");