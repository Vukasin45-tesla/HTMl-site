const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

let currentSectionIndex = 0;

window.addEventListener('wheel', (event) => {
  if (window.innerWidth > 768) {
    const delta = event.deltaY;

    if (delta > 0 && currentSectionIndex < 5) {
      currentSectionIndex++;
    } else if (delta < 0 && currentSectionIndex > 0) {
      currentSectionIndex--;
    }

    scrollToSection2();
  }
});

function scrollToSection2() {
  const sections = document.querySelectorAll('.section');
  const targetSection = sections[currentSectionIndex];
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

var hamburger = document.querySelector("#hamburger");
var nav = document.querySelector(".navMenu");
var navLinks = document.querySelectorAll(".navMenu a");



  Array.from(navLinks).forEach((a) =>
  a.addEventListener("click", () => {
    if (hamburger.classList.contains("toggle")) {
      hamburger.classList.remove("toggle");
    }
    if (nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
    }
  })
);

hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
});

document.addEventListener("DOMContentLoaded", function () {
  var animatedElement = document.querySelector('.servicespage .h-1.animate-on-scroll');

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      if (isElementInViewport(animatedElement)) {
          if (!animatedElement.classList.contains('animated')) {
              animatedElement.classList.add('animated');
              animatedElement.style.animation = 'none'; 
              void animatedElement.offsetWidth; 
              animatedElement.style.animation = null;
          }
      } else {
          animatedElement.classList.remove('animated');
      }
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  var animatedElement = document.querySelector('.aboutpage .h-2.animate-on-scroll');

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      if (isElementInViewport(animatedElement)) {
          if (!animatedElement.classList.contains('animated')) {
              animatedElement.classList.add('animated');
              animatedElement.style.animation = 'none'; 
              void animatedElement.offsetWidth; 
              animatedElement.style.animation = null; 
          }
      } else {
          animatedElement.classList.remove('animated');
      }
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  var animatedElement = document.querySelector('.wcupage .h-3.animate-on-scroll');

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      if (isElementInViewport(animatedElement)) {
          if (!animatedElement.classList.contains('animated')) {
              animatedElement.classList.add('animated');
              animatedElement.style.animation = 'none'; 
              void animatedElement.offsetWidth; 
              animatedElement.style.animation = null; 
          }
      } else {
          animatedElement.classList.remove('animated');
      }
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);
});
