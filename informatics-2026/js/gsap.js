document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  initTypeChars();
  initTypeWords();
  initFlow();
  initCursor();
  initBackgroundReact();
  initLogoMarquee();

});


/* -------------------------
TYPE: CHARACTER REVEAL
Used for headlines
------------------------- */

function initTypeChars() {

  if (!document.querySelector(".type-chars")) return;

  new SplitType(".type-chars");

  document.querySelectorAll(".type-chars").forEach((el) => {

    gsap.from(el.querySelectorAll(".char"), {
      y: 20,
      opacity: 0,
      stagger: 0.02,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

  });

}


/* -------------------------
TYPE: WORD FLOW
Used for paragraphs
------------------------- */

function initTypeWords() {

  if (!document.querySelector(".type-words")) return;

  new SplitType(".type-words");

  document.querySelectorAll(".type-words").forEach((el) => {

    gsap.from(el.querySelectorAll(".word"), {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

  });

}


/* -------------------------
FLOW: CONTENT BLOCKS
Cards, UI blocks
------------------------- */

function initFlow() {

  document.querySelectorAll(".flow-in").forEach((el) => {

    const items = el.children.length ? el.children : [el];

    let delay = 0;

    if (el.classList.contains("flow-delay-1")) delay = 0.25;
    if (el.classList.contains("flow-delay-2")) delay = 0.5;
    if (el.classList.contains("flow-delay-3")) delay = 1.35;
    if (el.classList.contains("flow-delay-4")) delay = 1.65;
    if (el.classList.contains("flow-delay-5")) delay = 2;

    const baseAnimation = {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      delay: delay,
      ease: "power3.out"
    };

    // ✅ bypass scroll trigger if forced
    if (el.classList.contains("flow-now")) {
      gsap.from(items, baseAnimation);
    } else {
      gsap.from(items, {
        ...baseAnimation,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=100px",
          toggleActions: "play none none none"
        }
      });
    }

  });

}


/* -------------------------
CUSTOM CURSOR CTA
------------------------- */

function initCursor() {

  if (!window.matchMedia("(pointer: fine)").matches) return;

  const cursor = document.querySelector(".cursor-cta");

  if (!cursor) return;

  const xTo = gsap.quickTo(cursor, "x", {
    duration: 0.35,
    ease: "power3.out"
  });

  const yTo = gsap.quickTo(cursor, "y", {
    duration: 0.35,
    ease: "power3.out"
  });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  document.querySelectorAll(".hover-cta").forEach(el => {

    el.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.25,
        ease: "power3.out"
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        duration: 0.25,
        ease: "power3.out"
      });
    });

  });

}


/* -------------------------
BACKGROUND MOUSE REACTION
------------------------- */

function initBackgroundReact() {

  const bg = document.querySelector(".bkg-hero");

  if (!bg) return;

  const xTo = gsap.quickTo(bg, "x", {
    duration: 0.6,
    ease: "power3.out"
  });

  const yTo = gsap.quickTo(bg, "y", {
    duration: 0.6,
    ease: "power3.out"
  });

  window.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    xTo(x);
    yTo(y);

  });

}


/* -------------------------
LOGO MARQUEE
Scroll speed responsive
------------------------- */
function initLogoMarquee() {

  const wrap = document.querySelector(".logo-wrap");
  const list = document.querySelector(".logo-list");

  // duplicate for seamless loop
  list.innerHTML += list.innerHTML;

  // base animation
  const tween = gsap.to(list, {
    xPercent: -50,
    duration: 40,     // adjust speed here
    ease: "none",
    repeat: -1
  });

  // smooth pause on hover
  wrap.addEventListener("mouseenter", () => {
    gsap.to(tween, {
      timeScale: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  });

  wrap.addEventListener("mouseleave", () => {
    gsap.to(tween, {
      timeScale: 1,
      duration: 0.8,
      ease: "power2.inOut"
    });
  });

}

initLogoMarquee();

/* -------------------------
SCROLL WORK
------------------------- */


const track = document.querySelector(".img-track");

gsap.registerPlugin(ScrollTrigger);

gsap.to(".img-track", {
  xPercent: -45,
  ease: "none",
  scrollTrigger: {
    trigger: ".img-scroll-wrapper",
    start: "top bottom",
    end: "bottom top",
    scrub: 1.4,
    invalidateOnRefresh: true
  }
});


/* TESTIMONIAL TRANSITION  */
function initTestimonials() {
  const items = gsap.utils.toArray(".testimonial-item");
  let current = 0;

  // show first
  gsap.set(items[0], { opacity: 1 });

  function animateSlide(nextIndex) {
    const currentEl = items[current];
    const nextEl = items[nextIndex];

    const tl = gsap.timeline();

    // prep next (hidden but ready)
    gsap.set(nextEl, {
      opacity: 0,
      zIndex: 2
    });

    gsap.set(currentEl, {
      zIndex: 1
    });

    // CROSSFADE + motion (overlapping)
    tl.to(currentEl, {
      opacity: 0,
      y: -20,
      duration: .5,
      ease: "power2.out"
    }, 0);

    tl.fromTo(nextEl,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" },
      0.1 // 👈 overlap = key
    );

    current = nextIndex;
  }

  // auto loop
  setInterval(() => {
    const next = (current + 1) % items.length;
    animateSlide(next);
  }, 5000);
}

initTestimonials();

/* SITE FOOTER */

window.addEventListener("load", () => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".site-footer",   // 👈 parent trigger
      start: "top 30%",          // when footer container hits mid-ish viewport
      end: "top -15%",
      scrub: true
    }
  });

  // =========================
  // MAIN REVEAL
  // =========================
  tl.fromTo(".footer-reveal",
    {
      y: 100,
      scale: 0.97,
      opacity: 0
    },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      ease: "none"
    }
  );

  // =========================
  // COLUMN STAGGER
  // =========================
  tl.from(".footer-reveal .col", {
    y: 30,
    opacity: 0,
    stagger: 0.06,
    ease: "power2.out"
  }, 0.1);

  // =========================
  // UTILITY
  // =========================
  tl.from(".footer-utility", {
    y: 15,
    opacity: 0,
    ease: "power2.out"
  }, 0.25);

});