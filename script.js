document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const overlay = document.getElementById('overlay');

  const openMenu = () => {
    menuBtn.classList.add('open');
    overlay.classList.add('active');
  };

  const closeMenu = () => {
    menuBtn.classList.remove('open');
    overlay.classList.remove('active');
  };

  // Toggle on click
  menuBtn.addEventListener('click', () => {
    overlay.classList.contains('active') ? closeMenu() : openMenu();
  });

  // Open on hover
  menuBtn.addEventListener('mouseenter', () => {
    if (!overlay.classList.contains('active')) openMenu();
  });

  // Close when leaving menu area
  overlay.addEventListener('mouseleave', () => {
    if (overlay.classList.contains('active')) closeMenu();
  });
});
