// ---------- SPOTLIGHT ----------
const spotlight = document.getElementById("spotlight");
document.querySelector(".hero-section").addEventListener("mousemove", e => {
  spotlight.style.top = `${e.clientY}px`;
  spotlight.style.left = `${e.clientX}px`;
});

// ---------- TYPING EFFECT ----------
const typingText = document.getElementById("typing-text");
const phrases = ["Aprenda Bootstrap rápido! 🚀", "Cards, Botões e Forms 👌", "Seja o dev que você sempre quis 🌟"];
let i = 0, j = 0, currentPhrase = "", isDeleting = false;

function type() {
  if (i >= phrases.length) i = 0;
  currentPhrase = phrases[i];

  if (!isDeleting) {
    typingText.textContent = currentPhrase.substring(0, j+1);
    j++;
    if (j === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, j-1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// ---------- CARDS FADE-IN ON SCROLL ----------
const cards = document.querySelectorAll(".card");
function checkCards() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom) card.classList.add("visible");
  });
}
window.addEventListener("scroll", checkCards);
checkCards(); // verifica ao carregar

// ---------- PROGRESS BARS ----------
const progressBars = document.querySelectorAll(".progress-bar");
function animateProgress() {
  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if(barTop < window.innerHeight * 0.85) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
}
window.addEventListener("scroll", animateProgress);
animateProgress(); // verifica ao carregar

// ---------- CONFETE ----------
function startConfetti() {
  const colors = ["#ff0a54", "#ff477e", "#ff85a1", "#fbb1b1", "#f9bec7"];
  for(let i=0; i<100; i++){
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    confetti.style.left = Math.random()*window.innerWidth + "px";
    confetti.style.top = "-20px";
    confetti.style.zIndex = 9999;
    confetti.style.borderRadius = "50%";
    confetti.style.opacity = Math.random();
    confetti.style.transition = "all 3s linear";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = window.innerHeight + "px";
      confetti.style.transform = `rotate(${Math.random()*360}deg)`;
    }, 50);

    setTimeout(() => confetti.remove(), 3000);
  }
}

// ---------- DARK MODE TOGGLE ----------
const darkToggle = document.getElementById("darkModeToggle");
const toggleIcon = darkToggle.querySelector(".icon");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // troca o ícone
  if(document.body.classList.contains("dark-mode")){
    toggleIcon.textContent = "🌙";
    localStorage.setItem("darkMode", "true");
  } else {
    toggleIcon.textContent = "🌞";
    localStorage.setItem("darkMode", "false");
  }
});

// carregar preferência do usuário
if(localStorage.getItem("darkMode") === "true"){
  document.body.classList.add("dark-mode");
  toggleIcon.textContent = "🌙";
}
