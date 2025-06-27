document.addEventListener("DOMContentLoaded", function () {
  // NAVIGATION BAR
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  // PROJECTS SECTION – Dot Hover to Switch Slides
  const dots = document.querySelectorAll('.project-dots .dot');
  const slides = document.querySelectorAll('.project-slide');

  dots.forEach(dot => {
    dot.addEventListener('mouseenter', () => {
      const target = dot.getAttribute('data-slide');

      // Activate correct dot
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      // Activate correct slide
      slides.forEach(slide => {
        slide.classList.remove('active');
        if (slide.getAttribute('data-slide') === target) {
          slide.classList.add('active');
        }
      });
    });
  });

  // PROJECTS SECTION – Fade dots in on scroll
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".project-slider");
  const dots = document.querySelectorAll(".project-dots .dot");

  dots.forEach(dot => {
    dot.addEventListener("mouseenter", () => {
      const slideNum = parseInt(dot.dataset.slide, 10);
      const offset = (slideNum - 1) * 100;

      // Move slider
      slider.style.transform = `translateX(-${offset}%)`;

      // Active dot
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  // Fade in dots on scroll
  const dotContainer = document.querySelector(".project-dots");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) dotContainer.classList.add("visible");
    });
  }, { threshold: 0.2 });

  if (dotContainer) observer.observe(dotContainer);
});

  // RESUME SECTION – Animate timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  timelineItems.forEach(item => timelineObserver.observe(item));

  // BLOG SECTION – Animate blog tiles
  const blogTiles = document.querySelectorAll('.blog-tile, .blog-title');

  const blogObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  blogTiles.forEach(tile => blogObserver.observe(tile));

  // CONTACT SECTION – Animated submit button
  const button = document.querySelector('.submit-btn');
  if (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.add('clicked');

      setTimeout(() => {
        this.classList.remove('clicked');
        // Optional: submit form here
      }, 1500);
    });
  }
});
