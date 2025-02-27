  // -- SCROLL EVENTS -- //
  $('#compare-controls ul a').on('click', function (e) {
    e.preventDefault();
    var targetTab = $(this).attr('href');

    // Remove active class from all tabs and hide all tab content with fadeOut
    $('#compare-controls ul li').removeClass('active');
    $('.tab-pane.in').fadeOut(300, function() {
      $(this).removeClass('in active');
      
      // Add active class to the clicked tab and show the corresponding tab content with fadeIn
      $('#compare-controls ul a[href="' + targetTab + '"]').parent().addClass('active');
      $(targetTab).fadeIn(300).addClass('in active');
    });
  });
  
  // Vanilla JavaScript scroll event
  window.addEventListener("scroll", function () {
    var image = document.getElementById("hero-img");
    var scrollPosition = window.scrollY;
    var scaleFactor = 1 + scrollPosition * 0.001;
    var opacityFactor = Math.min(scrollPosition / 500, 1);

    image.style.transform = "scale(" + scaleFactor + ")";
    image.style.opacity = 1 - opacityFactor;
  });

  // jQuery scroll event
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
      // Add class "scroll" if it's not already present
      if (!$("#hdr-site").hasClass("scroll")) {
          $("#hdr-site").addClass("scroll");
      }
  } else {
      // Remove class "scroll" if it's not already removed
      if ($("#hdr-site").hasClass("scroll")) {
          $("#hdr-site").removeClass("scroll");
      }
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