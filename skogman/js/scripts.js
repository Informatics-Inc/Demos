  // -- SCROLL EVENTS -- //


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

$(document).ready(function() {
  // Toggle class and collapse content when button is clicked
  $(document).on('click', '.filter-item-collapse button', function() {
      var targetContent = $(this).siblings('.input-collapse-content');
      $('.input-collapse-content').not(targetContent).removeClass('expanded');
      targetContent.toggleClass('expanded');

      // Toggle "active" class on clicked button
      $(this).toggleClass('active');
      
      // Remove "active" class from other buttons
      $('.filter-item-collapse button').not($(this)).removeClass('active');
  });

  // Toggle collapse content when button is clicked again
  $(document).on('click', '.filter-item-collapse .input-collapse-content', function(event) {
      event.stopPropagation();
  });

  // Remove class from input-collapse-content and button when anything outside is clicked
  $(document).on('click', function(event) {
      if (!$(event.target).closest('.filter-item-collapse').length) {
          $('.input-collapse-content').removeClass('expanded');
          $('.filter-item-collapse button').removeClass('active');
      }
  });

  // When the mobile-filter-toggle button is clicked
  $(".mobile-filter-toggle").click(function(){
    // Add the class 'open' to the div with class 'theme-form-filter'
        $(".theme-form-filter").addClass("open");
    });

    // When the mobile-filter-close button is clicked
    $(".mobile-filter-close").click(function(){
        // Remove the class 'open' from the div with class 'theme-form-filter'
        $(".theme-form-filter").removeClass("open");
    });

    // Toggle the Map
    $('.switch input[type="checkbox"]').change(function(){
        if($(this).is(":checked")) {
          $('.map-and-list').addClass('show-map');
        } else {
          $('.map-and-list').removeClass('show-map');
        }
      });
    
    // Tabs
    $(".tab-btn").click(function(){
        // Get the tab ID from the data attribute
        var tabId = $(this).data('tab');

        // Hide all tab contents with fade effect
        $(".tab-content").fadeOut(200);

        // Remove 'active' class from all tab buttons
        $(".tab-btn").removeClass("active");

        // Show the selected tab content with fade effect
        $("#" + tabId).fadeIn(200);

        // Add 'active' class to the clicked tab button
        $(this).addClass("active");
    });
  
});