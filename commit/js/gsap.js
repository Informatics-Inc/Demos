document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Split Text Animation
    new SplitType('.split-text');
    gsap.to('.word', {
        y: 0,
        opacity: 1,
        stagger: 0.05,
    });

    // H1 Color Accent
    gsap.to('.hero .text h1 em .char', {
        color: "#A2DCF0",
        delay: 1.5,
        stagger: 0.05
    });

    gsap.to('.hero .text h1 em .word .char', {
        scale: 1.1,
        duration: 0.3,
        delay: 1.5,
        stagger: 0.05,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1
    });

    // Floating Scroll Effect
    gsap.to(".float", {
        y: 100,
        scrollTrigger: {
            trigger: ".moving",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to(".bg-scroll", {
        xPercent: 10,
        ease: "none",
        scrollTrigger: {
            trigger: ".bg-scroll",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        }
    });

    // Row Animation (Left to Right)
    document.querySelectorAll(".flow-in").forEach((row) => {
        gsap.from(row.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: row,
                start: "top bottom-=100px",
                toggleActions: "play none none none",
            },
        });
    });

    // Logo Scroll Animation
    gsap.to(".logo-wrapper", {
        x: "-50%",
        ease: "none",
        scrollTrigger: {
            trigger: ".logo-slider",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        }
    });

    // Scroll Padding Adjustment
    const element = document.querySelector(".scroll-to-full");
    if (element) {
        gsap.to(element, {
            paddingLeft: "0px",
            paddingRight: "0px",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 40%",
                end: "bottom 70%",
                scrub: true,
            }
        });
    }
});
