const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const GREEN = {freq: 415.305, btnSelector: ".green-btn"};
const RED = {freq: 311.127, btnSelector: ".red-btn"};
const YELLOW = {freq: 247.942, btnSelector: ".yellow-btn"};
const BLUE = {freq: 207.652, btnSelector: ".blue-btn"};


function handlePress(color, dur=0.42) {
  const button = document.querySelector(color.btnSelector);

  // create Oscillator node
  let oscillator = audioCtx.createOscillator();
  let start = audioCtx.currentTime;
  oscillator.type = 'square';
  oscillator.frequency.value = color.freq; // value in hertz
  oscillator.connect(audioCtx.destination);

  button.classList.add("pressed");
  setTimeout(()=>button.classList.remove("pressed"), 420);

  oscillator.start(start);
  oscillator.stop(start + dur);
}

// handlePress(GREEN, 0, 0.42);
// handlePress(RED, 0, 0.42);
// handlePress(RED, 0.47, 0.42);
// handlePress(YELLOW, 0.94, 0.42);
// handlePress(BLUE, 1.41, 0.42);

document.addEventListener("DOMContentLoaded", () => {
  const greenButton = document.querySelector(".green-btn");
  const redButton = document.querySelector(".red-btn");
  const yellowButton = document.querySelector(".yellow-btn");
  const blueButton = document.querySelector(".blue-btn");
  greenButton.addEventListener("click", (e) => handlePress(GREEN));
  redButton.addEventListener("click", (e) => handlePress(RED));
  yellowButton.addEventListener("click", (e) => handlePress(YELLOW));
  blueButton.addEventListener("click", (e) => handlePress(BLUE));
});
