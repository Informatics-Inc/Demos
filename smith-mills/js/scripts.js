// -- Animated Send Button -- //

document.querySelectorAll('.button').forEach(button => {
  let getVar = variable => getComputedStyle(button).getPropertyValue(variable);
  button.addEventListener('click', e => {
      if(!button.classList.contains('active')) {
          button.classList.add('active');
          gsap.to(button, {
              keyframes: [{
                  '--left-wing-first-x': 50,
                  '--left-wing-first-y': 100,
                  '--right-wing-second-x': 50,
                  '--right-wing-second-y': 100,
                  duration: .2,
                  onComplete() {
                      gsap.set(button, {
                          '--left-wing-first-y': 0,
                          '--left-wing-second-x': 40,
                          '--left-wing-second-y': 100,
                          '--left-wing-third-x': 0,
                          '--left-wing-third-y': 100,
                          '--left-body-third-x': 40,
                          '--right-wing-first-x': 50,
                          '--right-wing-first-y': 0,
                          '--right-wing-second-x': 60,
                          '--right-wing-second-y': 100,
                          '--right-wing-third-x': 100,
                          '--right-wing-third-y': 100,
                          '--right-body-third-x': 60
                      })
                  }
              }, {
                  '--left-wing-third-x': 20,
                  '--left-wing-third-y': 90,
                  '--left-wing-second-y': 90,
                  '--left-body-third-y': 90,
                  '--right-wing-third-x': 80,
                  '--right-wing-third-y': 90,
                  '--right-body-third-y': 90,
                  '--right-wing-second-y': 90,
                  duration: .2
              }, {
                  '--rotate': 50,
                  '--left-wing-third-y': 95,
                  '--left-wing-third-x': 27,
                  '--right-body-third-x': 45,
                  '--right-wing-second-x': 45,
                  '--right-wing-third-x': 60,
                  '--right-wing-third-y': 83,
                  duration: .25
              }, {
                  '--rotate': 55,
                  '--plane-x': -8,
                  '--plane-y': 24,
                  duration: .2
              }, {
                  '--rotate': 40,
                  '--plane-x': 45,
                  '--plane-y': -180,
                  '--plane-opacity': 0,
                  duration: .3,
                  onComplete() {
                      setTimeout(() => {
                          button.removeAttribute('style');
                          gsap.fromTo(button, {
                              opacity: 0,
                              y: -8
                          }, {
                              opacity: 1,
                              y: 0,
                              clearProps: true,
                              duration: .3,
                              onComplete() {
                                  button.classList.remove('active');
                              }
                          })
                      }, 2000)
                  }
              }]
          })
          gsap.to(button, {
              keyframes: [{
                  '--text-opacity': 0,
                  '--border-radius': 0,
                  '--left-wing-background': getVar('--primary-darkest'),
                  '--right-wing-background': getVar('--primary-darkest'),
                  duration: .1
              }, {
                  '--left-wing-background': getVar('--primary'),
                  '--right-wing-background': getVar('--primary'),
                  duration: .1
              }, {
                  '--left-body-background': getVar('--primary-dark'),
                  '--right-body-background': getVar('--primary-darkest'),
                  duration: .4
              }, {
                  '--success-opacity': 1,
                  '--success-scale': 1,
                  duration: .25,
                  delay: .25
              }]
          })
      }
  })
});



// -- Hero Image Larger on Scroll -- //
(function () {
  $(window).scroll(function () { 
      var Num = $(window).scrollTop() / 500;
      var Num2 = $(window).scrollTop() * .0004; // higher number for larger scaling BG
      var Num2mod = Num2 + 1;
      var Num3 = $(window).scrollTop() * .2; // speed of text scroll
      var Num3mod = Num3 + 1;
      return $('.shade').css('opacity', Num),
      $(".hero-bg").css({"transform":"scale(" + Num2mod + ")"});
  });
}.call(this));



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