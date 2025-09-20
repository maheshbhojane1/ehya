const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  if (navMenu.classList.contains('show')) {
    menuBtn.textContent = "✖"; 
  } else {
    menuBtn.textContent = "☰"; 
  }
});
