 // -- SCROLL EVENTS -- //

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
      $("#hdr-site").addClass("scroll");
    } else {
      $("#hdr-site").removeClass("scroll");
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



    // -- Video Play Button -- //
  const iframe = document.querySelector('iframe');
  const playButton = document.querySelector('.video-container .play-button');

  playButton.addEventListener('click', function() {
      // Play the video
      iframe.src += "&autoplay=1";
      // Hide the play button
      playButton.style.display = 'none';
  });