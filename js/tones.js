const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const GREEN = {freq: 415.305, class: "green"};
const RED = {freq: 311.127, class: "red"};
const YELLOW = {freq: 247.942, class: "yellow"};
const BLUE = {freq: 207.652, class: "blue"};


function playColor(color, dur=0.42) {
  // create Oscillator node
  let oscillator = audioCtx.createOscillator();
  let start = audioCtx.currentTime;
  oscillator.type = 'square';
  oscillator.frequency.value = color.freq; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start(start);
  oscillator.stop(start + dur);
}

// playColor(GREEN, 0, 0.42);
// playColor(RED, 0, 0.42);
// playColor(RED, 0.47, 0.42);
// playColor(YELLOW, 0.94, 0.42);
// playColor(BLUE, 1.41, 0.42);

document.addEventListener("DOMContentLoaded", () => {
  const greenButton = document.querySelector(".green-btn");
  const redButton = document.querySelector(".red-btn");
  const yellowButton = document.querySelector(".yellow-btn");
  const blueButton = document.querySelector(".blue-btn");
  greenButton.addEventListener("click", (e) => playColor(GREEN));
  redButton.addEventListener("click", (e) => playColor(RED));
  yellowButton.addEventListener("click", (e) => playColor(YELLOW));
  blueButton.addEventListener("click", (e) => playColor(BLUE));
});
