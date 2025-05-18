const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
  { name: "Certificates", link: "#certificates" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" }
];

const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');

navItems.forEach(item => {
  const a = document.createElement('a');
  a.href = item.link;
  a.textContent = item.name;
  navLinks.appendChild(a);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});
