// Split Text Animation
const myText = new SplitType('.split-text');
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

// Row Animation (Left to Right)
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".flow-in").forEach((row) => {
        gsap.from(row.children, {
            y: 50, // Move from left
            opacity: 0,
            duration: 1,
            stagger: 0.2, // Each column animates one after another
            ease: "power3.out",
            scrollTrigger: {
                trigger: row,
                start: "top bottom-=100px",
                toggleActions: "play none none none",
            },
        });
    });
});
