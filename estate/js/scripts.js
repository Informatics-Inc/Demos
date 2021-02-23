// --- SWUP TRANSITIONS --- //
$(document).ready(function(){
	   $(window).scroll(function() {
		  var x = $(this).scrollTop();
		  $(".header figure img").css("-webkit-transform","translateY(" +  (x/3)  + "px)");
		  $(".parallax-2").css("-webkit-transform","translateY(" +  (x/5)  + "px)");
	  });
    
    $('#menu li .toggle').click(function() {
      $('#menu li.active').removeClass('active');
      $(this).parent().addClass('active');
    });
    $("#menu-toggle" ).click(function(){
      $("#menu").toggleClass('active');
      $(this).toggleClass('active');
    });

    $("#contact-close" ).click(function(){
      $("#contact").toggleClass("active");
    });
  
});


// -- ANIMATE INTO VIEW -- //
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".animate-in")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } 
  }
})

function isInViewport(node) {
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
$(window).scroll(function() {
  var scrolled = $(window).scrollTop()
  $('.bkg-parallax').each(function(index, element) {
    var initY = $(this).offset().top
    var height = $(this).height()
    var endY  = initY + $(this).height()

    // Check if the element is in the viewport.
    var visible = isInViewport(this)
    if(visible) {
      var diff = scrolled - initY
      var ratio = Math.round((diff / height) * 100)
      $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
    }
  })
})