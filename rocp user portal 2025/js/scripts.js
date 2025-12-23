(function () {
  const DURATION_MS = 300;

  /* ======================================================
     DISCLOSURE PANELS (mobile menu, submenus, accordions)
     ====================================================== */

  function openPanel(btn, panel) {
    btn.setAttribute("aria-expanded", "true");
    panel.classList.add("open");

    panel.style.display = "block";
    panel.style.height = "0px";

    const target = panel.scrollHeight;
    panel.offsetHeight; // force reflow
    panel.style.height = target + "px";

    setTimeout(() => {
      if (panel.classList.contains("open")) {
        panel.style.height = "";
      }
    }, DURATION_MS);
  }

  function closePanel(btn, panel) {
    btn.setAttribute("aria-expanded", "false");

    const current = panel.scrollHeight;
    panel.style.height = current + "px";
    panel.offsetHeight; // force reflow
    panel.style.height = "0px";

    setTimeout(() => {
      panel.classList.remove("open");
      panel.style.display = "";
      panel.style.height = "";
    }, DURATION_MS);
  }

  function togglePanel(btn) {
    const id = btn.getAttribute("aria-controls");
    if (!id) return;

    const panel = document.getElementById(id);
    if (!panel) return;

    const isOpen = btn.getAttribute("aria-expanded") === "true";
    isOpen ? closePanel(btn, panel) : openPanel(btn, panel);
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-disclosure");
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();
    togglePanel(btn);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    const panel = document.activeElement.closest(".submenu");
    if (!panel) return;

    const btn = document.querySelector(
      `.js-disclosure[aria-controls="${panel.id}"]`
    );
    if (!btn) return;

    closePanel(btn, panel);
    btn.focus();
  });

  document.querySelectorAll(".js-disclosure").forEach((btn) => {
    if (!btn.hasAttribute("aria-expanded")) {
      btn.setAttribute("aria-expanded", "false");
    }
  });

  /* ======================================================
   INIT: OPEN ACTIVE SUBMENUS
   ====================================================== */

  document.querySelectorAll(".js-disclosure").forEach((btn) => {
    const id = btn.getAttribute("aria-controls");
    if (!id) return;

    const panel = document.getElementById(id);
    if (!panel) return;

    const li = btn.closest(".has-submenu");

    const shouldBeOpen =
      (li && li.classList.contains("menu-active")) ||
      panel.querySelector("a[aria-current='page'], .submenu-active");

    if (shouldBeOpen) {
      btn.setAttribute("aria-expanded", "true");

      panel.classList.add("open");
      panel.style.display = "block";
      panel.style.height = ""; // allow natural height (no animation on load)
    }
  });


  /* ======================================================
  DROPDOWNS (menus, action tools)
  ====================================================== */

  (function () {
    const OPEN_CLASS = "is-open";

    function getMenu($trigger) {
      const id = $trigger.attr("aria-controls");
      return id ? $("#" + id) : $();
    }

    function closeOne($trigger) {
      const $menu = getMenu($trigger);
      $trigger.attr("aria-expanded", "false");
      $menu.removeClass(OPEN_CLASS);
    }

    function closeAll(exceptTrigger) {
      $(".js-dropdown[aria-expanded='true']").each(function () {
        if (exceptTrigger && this === exceptTrigger) return;
        closeOne($(this));
      });
    }

    function openOne($trigger) {
      const $menu = getMenu($trigger);
      $trigger.attr("aria-expanded", "true");
      $menu.addClass(OPEN_CLASS);

      // Optional: focus first menuitem (comment out if you don’t want this yet)
      const $first = $menu.find("[role='menuitem']").first();
      if ($first.length) $first.focus();
    }

    // Toggle dropdown
    $(document).on("click", ".js-dropdown", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const $trigger = $(this);
      const isOpen = $trigger.attr("aria-expanded") === "true";

      if (isOpen) {
        // Close THIS one
        closeOne($trigger);
        return;
      }

      // Otherwise: close others, then open this one
      closeAll();
      openOne($trigger);
    });
    

    // Click inside menu should not close it
    $(document).on("click", ".dropdown__menu", function (e) {
      e.stopPropagation();
    });

    // Click-away closes all
    $(document).on("click", function () {
      closeAll();
    });

    // Escape closes whichever is open and restores focus
    $(document).on("keydown", function (e) {
      if (e.key !== "Escape") return;

      $(".js-dropdown[aria-expanded='true']").each(function () {
        const $trigger = $(this);
        closeOne($trigger);
        $trigger.focus();
      });
    });

    // Init: ensure aria-expanded exists
    $(".js-dropdown").each(function () {
      const $t = $(this);
      if (!$t.attr("aria-expanded")) $t.attr("aria-expanded", "false");
    });
  })();
  

})();
