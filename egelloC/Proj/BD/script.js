const fireworksCanvas = document.getElementById('fireworks-canvas');
const ctx = fireworksCanvas.getContext('2d');

let fireworks = [];

fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;

function createFirework() {
  const x = Math.random() * fireworksCanvas.width;
  const y = fireworksCanvas.height;
  const size = Math.random() * 3 + 2;
  const speedY = Math.random() * 1 + 1;
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

  fireworks.push({ x, y, size, speedY, color });
}

function drawFirework() {
  ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

  fireworks.forEach((firework, index) => {
    ctx.beginPath();
    ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
    ctx.fillStyle = firework.color;
    ctx.fill();

    firework.y -= firework.speedY;

    if (firework.y <= 0) {
      fireworks.splice(index, 1);
    }
  });

  requestAnimationFrame(drawFirework);
}

function launchFireworks() {
  createFirework();
  setTimeout(launchFireworks, Math.random() * 200);
}

drawFirework();
launchFireworks();

window.addEventListener('resize', () => {
  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;
});

/* Existing JavaScript code */

// New function for the birthday cake click celebration
function celebrateBirthday() {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti');
  document.body.appendChild(confettiContainer);

  // Remove the confetti after a short delay
  setTimeout(() => {
    document.body.removeChild(confettiContainer);
  }, 5000);
}

/* Existing JavaScript code */
function createFloatingColors() {
  const colors = ['#ff4081', '#00bcd4', '#4caf50', '#ffc107', '#9c27b0', '#ff5722', '#03a9f4'];

  setInterval(() => {
    const floatingColor = document.createElement('div');
    floatingColor.classList.add('floating-colors');
    floatingColor.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    floatingColor.style.top = Math.random() * 100 + 'vh';
    floatingColor.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(floatingColor);

    // Remove the floating color after a short delay
    setTimeout(() => {
      document.body.removeChild(floatingColor);
    }, 10000);
  }, 200);
}

function createRotatingStars() {
  setInterval(() => {
    const rotatingStar = document.createElement('div');
    rotatingStar.classList.add('rotating-stars');
    rotatingStar.style.top = Math.random() * 100 + 'vh';
    rotatingStar.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(rotatingStar);

    // Remove the rotating star after a short delay
    setTimeout(() => {
      document.body.removeChild(rotatingStar);
    }, 3000);
  }, 200);
}

function celebrateBirthday() {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti');
  document.body.appendChild(confettiContainer);

  // Remove the confetti after a short delay
  setTimeout(() => {
    document.body.removeChild(confettiContainer);
  }, 5000);
}

// Call the functions to start the animations
createFloatingColors();
createRotatingStars();

