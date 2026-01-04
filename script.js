// Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Dark Mode
const toggle = document.getElementById('darkToggle');
toggle.onclick = () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

// Typing Effect
const texts = [
  "Frontend Developer",
  "UI Enthusiast",
  "Mahasiswa D4 Teknik Informatika"
];

let count = 0, index = 0;

(function type() {
  if (count === texts.length) count = 0;
  const current = texts[count].slice(0, ++index);
  document.querySelector('.typing-text').textContent = current;

  if (current.length === texts[count].length) {
    setTimeout(() => { index = 0; count++; }, 1500);
  }
  setTimeout(type, 120);
})();

// CV Modal
function openCV() {
  document.getElementById('cvModal').style.display = 'flex';
}
function closeCV() {
  document.getElementById('cvModal').style.display = 'none';
}

// 3D Tilt
document.querySelectorAll('.tilt').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.transform = `
      rotateX(${(y/r.height-0.5)*10}deg)
      rotateY(${(x/r.width-0.5)*-10}deg)
    `;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'rotateX(0) rotateY(0)';
  });
});
