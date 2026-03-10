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
    
    $(".page-header > img").css(
      "-webkit-transform",
      "translateY(" + x / 4 + "px)"
    );
  });
  
  document.querySelectorAll('.read-more-button').forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Toggle aria-expanded attribute
        button.setAttribute('aria-expanded', !isExpanded);

        // Toggle 'expanded' class for the animation
        content.classList.toggle('expanded');

        // // Update button text based on expanded state
        // button.textContent = isExpanded ? 'Read More' : 'Read Less';
    });
});
$('.menu-toggle').on('click', function() {
  // Toggle the "open" class on the element with the ID "dash-menu"
  $('#dash-menu').toggleClass('open');
});

  $('#menu-toggle').on('click', function() {
    $('#menu, #menu-toggle').toggleClass('active');
  });

  $(document).ready(function () {
    function filterGrid() {
        // Get all selected checkbox values
        const selectedCategories = $('#filters input:checked').map(function () {
            return $(this).val();
        }).get();

        // Show/hide grid items based on the selected categories
        $('#cert-grid .grid-item').each(function () {
            const itemCategories = $(this).data('category').split(' ');

            // Check if item matches all selected categories
            const isMatch = selectedCategories.every(category => itemCategories.includes(category));

            // Toggle visibility with fade effect
            if (isMatch || selectedCategories.length === 0) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    }

    // Trigger filterGrid on checkbox change
    $('#filters input[type="checkbox"]').on('change', filterGrid);

    // Reload button to reset filters and show all items
    $('#reload').on('click', function () {
        $('#filters input[type="checkbox"]').prop('checked', false);
        filterGrid();
    });

    // Initial load
    filterGrid();

    $('.input-group-trigger').on('click', function () {
      // Add or remove 'open' class on the clicked .input-group-trigger
      $(this).toggleClass('open');
      
      // Find the closest .input-group and target its .input-group-panel
      const panel = $(this).closest('.input-group').find('.input-group-panel');
      
      // Toggle the 'open' class on the target panel
      panel.toggleClass('open');
  
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