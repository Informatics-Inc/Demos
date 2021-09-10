  var map = {16: false, 87: false};
  $(document).keydown(function(e) {
      if (e.keyCode in map) {
          map[e.keyCode] = true;
          if (map[16] && map[87]) {
            $("#master-menu").toggleClass("active");    
          }
      }
  }).keyup(function(e) {
      if (e.keyCode in map) {
          map[e.keyCode] = false;
      }
  });

  lightbox.option({
    'resizeDuration': 400,
    'fadeDuration': 200,
    'imageFadeDuration': 200,
    'wrapAround': true
  })