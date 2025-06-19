document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Auto-close on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});

 document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.submit-btn');

    button.addEventListener('click', function (e) {
      e.preventDefault(); // for demo
      this.classList.add('clicked');

      // Optional: reset after 1.5 seconds
      setTimeout(() => {
        this.classList.remove('clicked');
        // You can also submit the form here
        // this.closest('form').submit();
      }, 1500);
    });
  });