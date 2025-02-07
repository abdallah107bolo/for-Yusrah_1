function openHeart() {
  const heart = document.querySelector(".heart");
  const message = document.getElementById("message");

  // Hide the heart
  heart.style.display = "none";

  // Show the message
  message.style.display = "block";
  createConfetti();
}

function createConfetti() {
  const confettiCount = 100;
  const container = document.body;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    container.appendChild(confetti);
  }
}
