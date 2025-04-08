const navbar = document.getElementById('navbar');
const navTitle = document.getElementById('nav-title');
const navLinks = document.getElementById('nav-links').querySelectorAll('a');
const menuToggle = document.getElementById('menu-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-white', 'shadow-md');
    navTitle.classList.remove('text-white');
    navTitle.classList.add('text-green-800');
    menuToggle.classList.remove('text-white');
    menuToggle.classList.add('text-green-800');
    navLinks.forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-700');
    });
  } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-white', 'shadow-md');
    navTitle.classList.add('text-white');
    navTitle.classList.remove('text-green-800');
    menuToggle.classList.add('text-white');
    menuToggle.classList.remove('text-green-800');
    navLinks.forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-gray-700');
    });
  }
});

// Mobile toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});



