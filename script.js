const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const heartsContainer = document.getElementById("hearts");
const confettiContainer = document.getElementById("confetti");

const spawnHeart = () => {
  const heart = document.createElement("div");
  heart.className = "heart";

  const size = Math.random() * 12 + 10;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${Math.random() * 6 + 6}s`;
  heart.style.animationDelay = `${Math.random() * 2}s`;
  heart.style.opacity = "0";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 14000);
};

const startHearts = () => {
  for (let i = 0; i < 24; i += 1) {
    setTimeout(spawnHeart, i * 350);
  }
  setInterval(spawnHeart, 600);
};

const createConfetti = () => {
  const confettiCount = 50;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-piece";
    
    const tx = (Math.random() - 0.5) * 200;
    confetti.style.setProperty("--tx", `${tx}px`);
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}px`;
    
    confettiContainer.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
};

const moveNoButton = () => {
  const padding = 20;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const buttonRect = noButton.getBoundingClientRect();

  const maxLeft = viewportWidth - buttonRect.width - padding;
  const maxTop = viewportHeight - buttonRect.height - padding;

  const newLeft = Math.random() * maxLeft + padding / 2;
  const newTop = Math.random() * maxTop + padding / 2;

  noButton.style.position = "absolute";
  noButton.style.left = `${newLeft}px`;
  noButton.style.top = `${newTop}px`;
};

if (yesButton) {
  yesButton.addEventListener("click", (e) => {
    createConfetti();
  });
}

if (noButton) {
  noButton.addEventListener("mouseenter", moveNoButton);
  noButton.addEventListener("touchstart", moveNoButton, { passive: true });
}

startHearts();
