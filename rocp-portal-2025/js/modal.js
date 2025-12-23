(function () {
    const ANIM_MS = 150;
    let lastOpener = null;

    function getDialog(id) {
        const el = document.getElementById(id);
        return el && el.tagName.toLowerCase() === "dialog" ? el : null;
    }

    function openModal(dialog, openerEl) {
        document.documentElement.classList.add("is-modal-open");
        document.body.classList.add("is-modal-open");

        lastOpener = openerEl || document.activeElement;

        if (typeof dialog.showModal === "function") {
            dialog.showModal();
        } else {
            // Basic fallback (non-modal) if <dialog> unsupported
            dialog.setAttribute("open", "");
        }

        // Trigger CSS animation
        dialog.classList.remove("is-closing");
        dialog.classList.add("is-opening");
        // next tick -> settle into open state
        requestAnimationFrame(() => {
            dialog.classList.remove("is-opening");
            dialog.classList.add("is-open");
        });
    }

    function closeModal(dialog, restoreFocus = true) {
        document.documentElement.classList.remove("is-modal-open");
        document.body.classList.remove("is-modal-open");

        dialog.classList.remove("is-opening", "is-open");
        dialog.classList.add("is-closing");

        window.setTimeout(() => {
            dialog.classList.remove("is-closing");

            if (typeof dialog.close === "function") {
                dialog.close();
            } else {
                dialog.removeAttribute("open");
            }

            if (restoreFocus && lastOpener && typeof lastOpener.focus === "function") {
                lastOpener.focus();
            }
        }, ANIM_MS);
    }

    // Open (delegated)
    $(document).on("click", ".js-modal-open", function (e) {
        e.preventDefault();
        const id = $(this).data("modal");
        const dialog = getDialog(id);
        if (!dialog) return;
        openModal(dialog, this);
    });

    // Close buttons inside dialog
    $(document).on("click", ".js-modal-close", function (e) {
        e.preventDefault();
        const dialog = this.closest("dialog");
        if (!dialog) return;
        closeModal(dialog, true);
    });

    // Backdrop click (clicking outside the surface)
    document.addEventListener("click", (e) => {
        const dialog = e.target && e.target.tagName === "DIALOG" ? e.target : null;
        if (!dialog || !dialog.classList.contains("modal")) return;
        closeModal(dialog, true);
    });

    // Intercept native cancel (Esc) to animate + restore focus
    document.querySelectorAll("dialog.modal").forEach((dialog) => {
        dialog.addEventListener("cancel", (e) => {
            e.preventDefault(); // prevents immediate close so we can animate
            closeModal(dialog, true);
        });
    });
})();
  