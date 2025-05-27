document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Split Text Animation
    new SplitType('.split-text');
    gsap.from('.split-text .char', {
        scrollTrigger: {
          trigger: '.split-text',
          start: 'top 80%', // starts when 20% from bottom
          toggleActions: 'play none none none',
        },
        y: 20,
        opacity: 0,
        stagger: 0.02,
        duration: 0.5,
        ease: 'power2.out',
      });
    // // Row Animation (Left to Right)
    // new SplitType('.split-word');
    // document.querySelectorAll(".split-word .line").forEach((word) => {
    //     gsap.from(word.children, {
    //         y: 50,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 0.2,
    //         ease: "power3.out",
    //         scrollTrigger: {
    //             trigger: word,
    //             start: "top bottom-=100px",
    //             toggleActions: "play none none none",
    //         },
    //     });
    // });
    new SplitType('.split-word');
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

    const emojis = ["🚀", "🎯", "📈", "✨"];
    const emojiEl = document.querySelector(".emoji-cycle");
    
    gsap.set(emojiEl, {
      perspective: 400,
      transformStyle: "preserve-3d"
    });
    
    let directions = [
      { rotateX: 90, rotateY: 0 },   // Flip up
      { rotateX: 0, rotateY: 90 },   // Flip right
      { rotateX: -90, rotateY: 0 },  // Flip down
      { rotateX: 0, rotateY: -90 }   // Flip left
    ];
    
    let tl = gsap.timeline({ repeat: -1 });
    
    emojis.forEach((emoji, i) => {
      const dir = directions[i % directions.length];
    
      // Flip out
      tl.to(emojiEl, {
        rotationX: dir.rotateX,
        rotationY: dir.rotateY,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => (emojiEl.textContent = emoji),
      });
    
      // Flip in
      tl.to(emojiEl, {
        rotationX: 0,
        rotationY: 0,
        opacity: 1,
        duration: 0.15,
        ease: "power2.out",
      });
    
      // Slightly shorter pause to keep it energetic
      tl.to({}, { duration: 0.4 });
    });
    
    gsap.registerPlugin(ScrollTrigger);

    const bkgImage = document.querySelector('.bkg-media img');
    
    gsap.to(bkgImage, {
      scrollTrigger: {
        trigger: '.bkg-media-scroll',   // Scroll will be triggered when this container is in view
        start: 'top bottom',                   // Start when the top of the container hits the top of the viewport
        end: 'bottom top',                  // End when the bottom of the container reaches the top of the viewport
        scrub: 0.5,                         // Scrub effect, so the scroll is smooth
        markers: false                      // You can enable markers for debugging
      },
      scale: 1.25,                            // Scale up the image by 1.5x as you scroll
      ease: "power2.in",                    // Smooth easing for the scale effect
    });
    
      


// Set up timeline that scrolls the panels in one by one
// let panels = gsap.utils.toArray(".panel");

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-section",
//     start: "top top",
//     end: () => "+=" + window.innerHeight * panels.length,
//     scrub: true,
//     pin: true,
//   }
// });

// panels.forEach((panel, i) => {
//   tl.fromTo(
//     panel,
//     { xPercent: 100, opacity: 0 },
//     {
//       xPercent: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out"
//     },
//     i // staggers panels one after another
//   );
// });

    
});
