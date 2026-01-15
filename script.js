// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark/Light Theme Toggle
const themeButton = document.createElement('button');
themeButton.id = "themeToggle";
themeButton.textContent = "🌙 Toggle Theme";
document.querySelector("header nav").appendChild(themeButton);

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Typing Effect
const titles = ["Web Developer", "Creative Director", "AI Enthusiast"];
let i = 0;
const heroText = document.querySelector(".hero p");

setInterval(() => {
  heroText.textContent = titles[i];
  i = (i + 1) % titles.length;
}, 2000);
