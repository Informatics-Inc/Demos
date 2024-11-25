$(document).ready(function () {
    $(".people-grid-tabs li").on("click", function (e) {
        e.preventDefault(); // Prevent default anchor link behavior

        // Get the panel ID from the clicked tab
        const panelId = $(this).data("panel");

        // Hide all panels with fadeOut
        $(".people-grid-panel.active").fadeOut(200, function () {
            // After fadeOut completes, remove the 'active' class from the panel
            $(this).removeClass("active");

            // Show the new panel and add 'active' class
            $(`#${panelId}`).fadeIn(200).addClass("active");
        });

        // Update the active tab
        $(".people-grid-tabs li").removeClass("active");
        $(this).addClass("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const leaders = document.querySelectorAll(".leader");
    const modals = document.querySelectorAll(".modal");

    const ANIMATION_DURATION = 300; // Match the CSS transition duration
    let scrollPosition = 0; // Variable to store the scroll position

    // Open modal
    leaders.forEach((leader) => {
        const info = leader.querySelector(".leader-info");
        const modal = leader.querySelector(".modal");
        const openButton = leader.querySelector(".open-modal");

        const showModal = () => {
            // Save the current scroll position
            scrollPosition = window.scrollY;

            // Add `no-scroll` class and adjust `body` styles
            document.body.classList.add("no-scroll");
            document.body.style.top = `-${scrollPosition}px`;

            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");
            if (openButton) openButton.setAttribute("aria-expanded", "true");
        };

        info.addEventListener("click", showModal);
        openButton.addEventListener("click", showModal);
    });

    // Close modal
    modals.forEach((modal) => {
        const closeButton = modal.querySelector(".close-modal");

        const closeModal = () => {
            modal.classList.add("closing"); // Start fade-out animation

            setTimeout(() => {
                modal.classList.remove("active", "closing");
                modal.setAttribute("aria-hidden", "true");

                const associatedButton = modal.closest(".leader").querySelector(".open-modal");
                if (associatedButton) associatedButton.setAttribute("aria-expanded", "false");

                // Remove `no-scroll` class and restore scroll position
                document.body.classList.remove("no-scroll");
                document.body.style.top = ""; // Remove the top style
                window.scrollTo(0, scrollPosition); // Restore scroll position
            }, ANIMATION_DURATION); // Wait for animation to finish
        };

        // Close button handler
        closeButton.addEventListener("click", closeModal);

        // Close modal on outside click
        modal.addEventListener("click", (event) => {
            if (event.target === modal) closeModal();
        });
    });
});
