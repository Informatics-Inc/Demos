  // -- No Orphans in H2 -- //
document.addEventListener('DOMContentLoaded', function () {
  var h2Elements = document.getElementsByTagName('h2');

  for (var i = 0; i < h2Elements.length; i++) {
    var words = h2Elements[i].innerText.split(' ');
    var lastWord = words.pop();
    var orphanWord = words.pop();
    var orphanText = `${orphanWord}&nbsp;${lastWord}`;

    if (!h2Elements[i].querySelector('span')) {
      h2Elements[i].innerHTML = `${words.join(' ')} <span class="no-wrap">${orphanText}</span>`;
    } 
  }
});


  // -- Hero Scale/Fade on Scroll -- //
  window.addEventListener('scroll', function() {
    var heroImage = document.querySelector('.hero');
    var image = document.querySelector('.hero img');
    
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var imageBottom = heroImage.offsetTop + heroImage.offsetHeight;
    var effectStart = imageBottom - windowHeight * 1.0; // Adjust this value to change the scroll position where effects start
    
    if (scrollPosition > effectStart) {
      var progress = (scrollPosition - effectStart) / (windowHeight * 0.2); // Adjust this value to change the duration of the scaling and fading effects
      var scale = 1 + progress * 0.1; // Adjust this value to change the maximum scale factor
      var opacity = 2.5 - progress;
      
      image.style.transform = 'scale(' + scale + ')';
      image.style.opacity = opacity;
    } else {
      image.style.transform = 'scale(1)';
      image.style.opacity = '1';
    }
  });

  
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

