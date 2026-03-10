var $radioButtons = $('input[type="radio"]');
$radioButtons.click(function() {
    $radioButtons.each(function() {
        $(this).parent().toggleClass('selected', this.checked);
    });
});

$(":checkbox").on('click', function(){
     $(this).parentsUntil(".col").toggleClass("checked");
});

$('select').selectpicker();

// Priority Navigaiton for Certification List //
$(function() {

    var $nav = $('nav.priority');
    var $btn = $('nav.priority button');
    var $vlinks = $('nav.priority .links');
    var $hlinks = $('nav.priority .hidden-links');
  
    var numOfItems = 0;
    var totalSpace = 0;
    var breakWidths = [];
  
    // Get initial state
    $vlinks.children().outerWidth(function(i, w) {
      totalSpace += w;
      numOfItems += 1;
      breakWidths.push(totalSpace);
    });
  
    var availableSpace, numOfVisibleItems, requiredSpace;
  
    function check() {
  
      // Get instant state
      availableSpace = $vlinks.width() - 10;
      numOfVisibleItems = $vlinks.children().length;
      requiredSpace = breakWidths[numOfVisibleItems - 1];
  
      // There is not enought space
      if (requiredSpace > availableSpace) {
        $vlinks.children().last().prependTo($hlinks);
        numOfVisibleItems -= 1;
        check();
        // There is more than enough space
      } else if (availableSpace > breakWidths[numOfVisibleItems]) {
        $hlinks.children().first().appendTo($vlinks);
        numOfVisibleItems += 1;
      }
      // Update the button accordingly
      $btn.attr("count", numOfItems - numOfVisibleItems);
      if (numOfVisibleItems === numOfItems) {
        $btn.addClass('hidden');
      } else $btn.removeClass('hidden');
    }
  
    // Window listeners
    $(window).resize(function() {
      check();
    });
  
    $btn.on('click', function() {
      $hlinks.toggleClass('hidden');
    });
  
    check();
  
  });