document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Split Header 
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#content",
    smooth: 2,
    speed: 3,
    effects: true
    });

    smoother.effects(".hero__image-cont", {
    speed: () => gsap.utils.random(0.55, 0.85, 0.05)
    });

    gsap.to(".anim-swipe", {
    yPercent: 300,
    delay: 0.2,
    duration: 3,
    stagger: {
      from: "random",
      each: 0.1
    },
    ease: "sine.out"
    });

    gsap.to(".hero__image-cont > img", {
    scale: 1.5,
    xPercent: 20,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=3000px",
      scrub: true
    }
    });


    gsap.delayedCall(2, () => {
    gsap.to(".shrink", {
      height: "75vh",
      duration: 5,
      ease: "slow(0.7, 0.7)" // ultra-smooth
    });
  });
    // gsap.fromTo(".hero1 .bkg-media video",
    //   { opacity: ".25" },
    //   {
    //     opacity: "1",
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".hero-wide",
    //       start: "top top",
    //       end: "bottom middle",
    //       scrub: true
    //     }
    //   }
    // );

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
    
      
    gsap.to(".hero-wide img", {
    y: -100, // adjust for stronger/weaker parallax
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-wide",
      start: "top bottom",   // when top of figure hits bottom of viewport
      end: "bottom top",     // when bottom of figure hits top of viewport
      scrub: true            // smooth parallax effect
    }
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
