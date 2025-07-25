const quotes = [
  "You're the reason I believe in love 💖",
  "Home is wherever you are, Mom 💐",
  "Your love is my superpower 🦸‍♂️",
  "No words are enough to express what you mean to me",
  "Thank you for every hug, every smile, every word 💕",
];

let quoteIndex = 0;
const quoteText = document.getElementById("quoteText");

function rotateQuotes() {
  quoteText.innerText = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}
setInterval(rotateQuotes, 3000);
rotateQuotes();

function revealSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
}

// Falling hearts animation
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = Array.from({ length: 30 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 2,
  d: Math.random() * 1 + 0.5
}));

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#e91e63";
  ctx.beginPath();
  hearts.forEach(h => {
    ctx.moveTo(h.x, h.y);
    ctx.arc(h.x, h.y, h.r, 0, Math.PI * 2, true);
  });
  ctx.fill();
  moveHearts();
}

function moveHearts() {
  hearts.forEach(h => {
    h.y += h.d;
    if (h.y > canvas.height) {
      h.y = 0;
      h.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawHearts, 30);
