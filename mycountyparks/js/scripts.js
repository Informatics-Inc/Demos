// -- Open / Close Filters -- //
// Toggle the open class on the filters div when the toggle button is clicked
$('.filter-toggle, .map-modal-toggle').click(function() {
  const target = $(this).hasClass('filter-toggle') ? '#filters' : '#map-modal';
  $(target).toggleClass('open');
  $('body').toggleClass('no-scroll', $(target).hasClass('open'));
});


$(function() {
  var options = {
    opens: 'center',
    buttonClasses: "btn-simple",
    applyButtonClasses: "btn-theme",
    // Conditionally set parentEl based on screen width
    parentEl: window.innerWidth >= 992 ? "#sidebar-affix" : "body"
  };

  $('input[name="daterange"]').daterangepicker(options, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
  
  // Optionally, handle resizing dynamically
  $(window).resize(function() {
    if (window.innerWidth >= 992) {
      $('input[name="daterange"]').data('daterangepicker').parentEl = "#daterange";
    } else {
      $('input[name="daterange"]').data('daterangepicker').parentEl = "body";
    }
  });
});

// -- MODAL --//
document.querySelectorAll(".open-button").forEach((openButton) => {
  openButton.addEventListener("click", () => {
    const targetModalId = openButton.dataset.targetModal;
    const modal = document.querySelector(targetModalId);

    if (modal) {
      modal.classList.add("show");
      setTimeout(() => {
        modal.showModal();
      }, 0); // Wait for the animation to complete
    }
  });
});

document.querySelectorAll(".close-button").forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const targetModalId = closeButton.dataset.closeModal;
    const modal = document.querySelector(targetModalId);

    if (modal) {
      modal.close();
      modal.classList.remove("show");
    }
  });
});

// -- User Toggle -- //
$("#user-menu-toggle").on("click", function() {
  $("#user-menu-list").toggleClass("open");
});
// -- Sub Menu Toggle -- //
$("#more-info-toggle").on("click", function() {
  $("#more-info-list").toggleClass("open");
});
// -- ADD CLASS ON SCROLL --//
window.addEventListener("scroll", function() {
  var scroll = window.scrollY;
  var siteHeader = document.getElementById("site-header");

  if (siteHeader) {
    if (scroll > 50) {
      siteHeader.classList.add("scroll");
    } else {
      siteHeader.classList.remove("scroll");
    }
  }

  var pageHeaderImg = document.querySelector(".page-header figure img");

  if (pageHeaderImg) {
    pageHeaderImg.style.transform = "scale(" + (1 + '.' + (scroll / 800)) + ")";
    pageHeaderImg.style.webkitTransform = "translateZ(" + (scroll / 8) + "px)";
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
      // You can add code for elements not in view if needed
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// -- Swiper Sliders -- //
var swiper = new Swiper(".scroll-list", {
  slidesPerView: 1.5,
  spaceBetween: 25,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    550: {
      slidesPerView: 2.5,
    },
    650: {
      slidesPerView: 2.75,
    },
    768: {
      slidesPerView: 3.75,
    },
    992: {
      slidesPerView: 4.65,
    }

  },
});

// -- Fix the Sec Nav -- //
window.onscroll = function() {
  navFix();
};

var navbar = document.getElementById("sec-nav");
var sticky = navbar ? navbar.offsetTop : 0;

function navFix() {
  if (navbar) { // Check if navbar is not null
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
}

// -- Date Picker -- //
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

var checkin = $('#dp1').datepicker({
  beforeShowDay: function(date) {
    return date.valueOf() >= now.valueOf();
  },
  autoclose: true
}).on('changeDate', function(ev) {
  if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate").valueOf()) {
    var newDate = new Date(ev.date);
    newDate.setDate(newDate.getDate() + 1);
    checkout.datepicker("update", newDate);
  }
  $('#dp2')[0].focus();
});

var checkout = $('#dp2').datepicker({
  beforeShowDay: function(date) {
    if (!checkin.datepicker("getDate").valueOf()) {
      return date.valueOf() >= new Date().valueOf();
    } else {
      return date.valueOf() > checkin.datepicker("getDate").valueOf();
    }
  },
  autoclose: true
}).on('changeDate', function(ev) {});

// -- Swiper Pause Button -- //
$(".swiper-button-pause").click(function() {
  swiper.autoplay.stop();
});



// -- Expand Collapse Menu -- //
$(document).ready(function(){
  
});