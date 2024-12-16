// -- Slide in From Left //
const observer = new IntersectionObserver((entries) => {  
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-show');
    } else {
      entry.target.classList.remove('slide-show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.slide-in');
hiddenElements.forEach((el) => observer.observe(el));