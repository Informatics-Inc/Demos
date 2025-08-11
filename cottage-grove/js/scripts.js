// -- SCROLL EVENTS -- //
  // jQuery scroll event
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $("#hdr-site").addClass("scroll");
    } else {
      $("#hdr-site").removeClass("scroll");
    }
    var x = $(this).scrollTop();
    $(".hero figure img, .page-hdr figure img").css(
      "-webkit-transform",
      "translateY(" + x / 6 + "px)"
    );
    $(".bkg-texture").css(
      "-webkit-transform",
      "translateY(" + x / 8 + "px)"
    );
  });

$('.accordion-item h3').on('click', function () {
    const $header = $(this);
    const $item = $header.closest('.accordion-item'); // scope to clicked item
    const $collapse = $header.next('.accordion-collapse');

    // Toggle clicked item
    $header.toggleClass('collapsed');
    $collapse.toggleClass('show collapsed');

    // Close other items in the same accordion
    $item.siblings('.accordion-item').each(function () {
        $(this).find('h3').addClass('collapsed');
        $(this).find('.accordion-collapse').removeClass('show').addClass('collapsed');
    });
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

$(document).ready(function () {
    $('#menu-toggle').on('click', function () {
      // Toggle the hamburger/X icon
      $(this).toggleClass('collapsed');

      // Toggle the main nav menu
      $('#menu').toggleClass('collapsed').toggleClass('show');

      // Optional: Update ARIA attribute for accessibility
      const expanded = $(this).attr('aria-expanded') === 'true';
      $(this).attr('aria-expanded', !expanded);
    });
  });