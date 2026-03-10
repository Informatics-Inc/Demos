// -- SCROLL EVENTS -- //
$('.menu-toggle').on('click', function() {
  $('.site-menu').toggleClass('active');
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
    $(".hero-bkg video, .hero-bkg img").css(
      "-webkit-transform",
      "translateY(" + x / 6 + "px)"
    );
    $(".bkg-texture").css(
      "-webkit-transform",
      "translateY(" + x / 8 + "px)"
    );
  });

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Allows users to click pagination dots
    },
    autoplay: {
      delay: 3000, // 3 seconds per slide
      disableOnInteraction: false, // Keeps autoplay running after user interaction
    },
    effect: "fade", // Enables fade transition
    fadeEffect: {
      crossFade: true, // Ensures smooth fading
    },
    speed: 1000, // 1-second transition speed
  });

  $(".modal-video-button").modalVideo({
    vimeo: {
      
    }
  });
