

// -- SWIPER -- //
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true, // Set loop to true for continuous scrolling
    navigation: {
      nextEl: '.custom-next-button',
      prevEl: '.custom-prev-button',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Add media query for screens with maximum width of 991px
  if (window.matchMedia('(min-width: 768px)').matches) {
    swiper.params.slidesPerView = 2;
  }

  // Add media query for screens with minimum width of 992px
  if (window.matchMedia('(min-width: 992px)').matches) {
    swiper.params.slidesPerView = 4;
  }

   // Add media query for screens with maximum width of 991px
   if (window.matchMedia('(min-width: 1200px)').matches) {
    swiper.params.slidesPerView = 7;
  }

  // Update Swiper to apply the new slidesPerView value
  swiper.update();

  

// -- ANIMATE IN TO VIEW -- //
var $animation_elements = $('.animate-in, .btn-text, .fade-in');
var $window = $(window);

function check_if_in_view() {
var window_height = $window.height();
var window_top_position = $window.scrollTop();
var window_bottom_position = (window_top_position + window_height);

$.each($animation_elements, function() {
	var $element = $(this);
	var element_height = $element.outerHeight();
	var element_top_position = $element.offset().top;
	var element_bottom_position = (element_top_position + element_height);

	//check to see if this current container is within viewport
	if ((element_bottom_position >= window_top_position) &&
	(element_top_position <= window_bottom_position)) {
	$element.addClass('visible');
	} else {
	
	}
	});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


  // -- Play Button on Video -- //
  const video = document.getElementById('my-video');
  const playButton = document.getElementById('play-button');

  playButton.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playButton.style.opacity = '0'; /* Make the play button transparent */
      video.setAttribute('controls', 'controls'); /* Show controls when played */
    } else {
      video.pause();
      playButton.style.opacity = '1'; /* Make the play button visible */
    }
  });

  video.addEventListener('pause', function() {
    playButton.style.opacity = '1'; /* Make the play button visible */
    video.removeAttribute('controls'); /* Hide controls when paused */
  });

  video.addEventListener('play', function() {
    playButton.style.opacity = '0'; /* Make the play button transparent */
    video.setAttribute('controls', 'controls'); /* Show controls when played */
  });

