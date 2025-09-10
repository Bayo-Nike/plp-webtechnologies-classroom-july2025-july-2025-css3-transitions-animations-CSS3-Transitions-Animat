// PART 2: Custom JS Functions

// Reusable function to trigger a class with animation
function addAnimationClass(element, className) {
    element.classList.add(className);
    setTimeout(() => {
      element.classList.remove(className);
    }, 1500); // Reset after animation
  }
  
  // Function to animate a box
  function triggerBoxAnimation() {
    const box = document.getElementById('animateBox');
    addAnimationClass(box, 'animate');
  }
  
  // Function to toggle card flip
  function flipCard(container) {
    const card = container.querySelector('.card');
    card.classList.toggle('flipped');
  }
  
  // Function to toggle animation on the ball
  let isBallMoving = false;
  const ball = document.getElementById('ball');
  
  function toggleBall() {
    if (!ball) return;
    isBallMoving = !isBallMoving;
    ball.style.animationPlayState = isBallMoving ? 'running' : 'paused';
  }
  
  // Example: Return values and scope
  function multiply(a, b) {
    const result = a * b; // Local scope
    return result;
  }
  
  function showMultiplication() {
    const output = multiply(5, 3);
    console.log("5 x 3 =", output); // Reuse and return value demo
  }
  
  showMultiplication();
  