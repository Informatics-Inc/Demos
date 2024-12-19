// -- Slide in From Left //
const observer = new IntersectionObserver((entries, observer) => {  
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-show');
      observer.unobserve(entry.target); // Stop observing once animation is applied
    }
  });
});

const hiddenElements = document.querySelectorAll('.slide-in');
hiddenElements.forEach((el) => observer.observe(el));
