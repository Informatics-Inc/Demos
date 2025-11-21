// Global disclosure: works for any .js-disclosure with an aria-controls panel
jQuery(function ($) {
  const TOGGLE = '.js-disclosure';

  function getPanel($btn) {
    // If aria-controls is present, use it
    const id = $btn.attr('aria-controls');
    if (id) {
      const $p = $('#' + id);
      if ($p.length) return $p;
    }
    // Else: first next sibling with .submenu
    const $next = $btn.nextAll('.submenu').first();
    if ($next.length) {
      // auto-wire aria-controls
      if (!$next.attr('id')) $next.attr('id', 'dd-' + Math.random().toString(36).slice(2));
      $btn.attr('aria-controls', $next.attr('id'));
      return $next;
    }
    return $(); // empty
  }

  // Click/tap toggles
  $(document).on('click', TOGGLE, function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation(); 
    const $btn = $(this);
    const $panel = getPanel($btn);
    if (!$panel.length) return;

    // Ensure base ARIA
    if (!$btn.attr('aria-haspopup')) $btn.attr('aria-haspopup', 'true');
    if (!$btn.attr('aria-expanded')) $btn.attr('aria-expanded', 'false');

    const open = $btn.attr('aria-expanded') === 'true';
    $btn.attr('aria-expanded', String(!open));
    $panel.toggleClass('open', !open);
  });

  // Optional: Esc inside a panel closes and returns focus to its trigger
  $(document).on('keydown', '.submenu', function (e) {
    if (e.key === 'Escape') {
      const $panel = $(this);
      const $btn = $('[aria-controls="' + $panel.attr('id') + '"]').first();
      if ($btn.length) {
        $btn.attr('aria-expanded', 'false');
        $panel.removeClass('open');
        $btn.trigger('focus');
      }
    }
  });

  // Optional: click outside closes all open panels
  $(document).on('click', function (e) {
    if ($(e.target).closest('.js-disclosure, .submenu, .js-disclosure *').length) return;
    $('.submenu.open').each(function () {
      const id = this.id;
      $('[aria-controls="' + id + '"]').attr('aria-expanded', 'false');
      $(this).removeClass('open');
    });
  });


  // Esc inside submenu closes and returns focus to trigger
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const panel = e.target.closest(PANEL);
    if (!panel) return;
    const li = panel.closest('.has-submenu');
    const btn = li && li.querySelector(TRIGGER);
    if (!btn) return;

    // Let CSS hide it (focus leaves -> :focus-within off), but sync ARIA now
    setExpanded(btn, false);
    btn.focus();
  });
})

