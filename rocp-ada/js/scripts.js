// -- SCROLL EVENTS -- //

$(function () {
  // Main menu toggle
  var $menuToggle = $('#menu-toggle');
  var $menu = $('#primary-nav');

  $menuToggle.on('click', function () {
    var expanded = $menuToggle.attr('aria-expanded') === 'true';
    $menuToggle.attr('aria-expanded', String(!expanded));
    $menu.toggleClass('open');
  });

  // Close main menu on Escape
  $menu.on('keydown', function (e) {
    if (e.key === 'Escape') {
      $menuToggle.attr('aria-expanded', 'false');
      $menu.removeClass('open');
      $menuToggle.focus();
    }
  });

  // User submenu toggle
  var $userToggle = $('#user-toggle');
  var $userMenu = $('#user-submenu');

  $userToggle.on('click', function () {
    var expanded = $userToggle.attr('aria-expanded') === 'true';
    $userToggle.attr('aria-expanded', String(!expanded));
    $userMenu.toggleClass('open');
  });

  // Close user submenu on Escape
  $userMenu.on('keydown', function (e) {
    if (e.key === 'Escape') {
      $userToggle.attr('aria-expanded', 'false');
      $userMenu.removeClass('open');
      $userToggle.focus();
    }
  });
});

// Minimal JS: sync ARIA, support Esc, manage focus
const btn = document.getElementById('lms-btn');
const sub = document.getElementById('lms-sub');

function open(){ btn.setAttribute('aria-expanded','true'); sub.hidden = false; }
function close(){ btn.setAttribute('aria-expanded','false'); sub.hidden = true; }

btn.addEventListener('click', () => {
  (btn.getAttribute('aria-expanded') === 'true' ? close : open)();
  if (!sub.hidden) sub.querySelector('a')?.focus();
});

sub.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ e.preventDefault(); close(); btn.focus(); }
});
document.addEventListener('click', e => {
  if (!sub.hidden && !sub.contains(e.target) && e.target !== btn) close();
});
