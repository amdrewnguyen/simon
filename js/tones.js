const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const GREEN = {freq: 415.305, btnSelector: ".green-btn"};
const RED = {freq: 311.127, btnSelector: ".red-btn"};
const YELLOW = {freq: 247.942, btnSelector: ".yellow-btn"};
const BLUE = {freq: 207.652, btnSelector: ".blue-btn"};
const WRONG = {freq: 42, btnSelector: ".wrong-btn"};

const COLORS = [GREEN, RED, YELLOW, BLUE];

// easy
// const sequence = [GREEN, RED, YELLOW, BLUE, GREEN];
// medium
// const sequence = [GREEN, RED, YELLOW, BLUE, GREEN, GREEN, GREEN];
// hard
const sequence = [GREEN, RED, RED, YELLOW, BLUE, RED, YELLOW, BLUE, GREEN, GREEN, GREEN, RED, YELLOW, BLUE];

function buttonPress(color, dur=0.42, offset) {
  const button = document.querySelector(color.btnSelector);

  // create Oscillator node
  let oscillator = audioCtx.createOscillator();
  let start = offset || audioCtx.currentTime;
  oscillator.type = 'square';
  oscillator.frequency.value = color.freq; // value in hertz
  oscillator.connect(audioCtx.destination);

  oscillator.onended = () => button.classList.remove("pressed");
  oscillator.start(start);
  oscillator.stop(start + dur);
}

function nextTurn() {
  let i = Math.floor(Math.random() * 4);
  sequence.unshift(COLORS[i]);
  playSequence();
}

function playSequence() {
  const greenButton = document.querySelector(".green-btn");
  const redButton = document.querySelector(".red-btn");
  const yellowButton = document.querySelector(".yellow-btn");
  const blueButton = document.querySelector(".blue-btn");

  const buttons = {
    ".green-btn": greenButton,
    ".red-btn": redButton,
    ".yellow-btn": yellowButton,
    ".blue-btn": blueButton,
  };

  let dur = 0.42;
  if (sequence.length > 5) {
    dur = 0.32;
  }
  if (sequence.length > 13) {
    dur = 0.22;
  }

  let frameStart = audioCtx.currentTime;

  sequence.forEach((color, i) => {
    let offset = frameStart + i * (dur + 0.05);
    let button = buttons[sequence[i].btnSelector];
    setTimeout(() => button.classList.add("pressed"), offset * 1000);
    buttonPress(color, dur, offset);
  });
}

function receiveSequence() {
  let i = 0;

  const buttonContainer = document.querySelector(".button-container");
  buttonContainer.addEventListener("click", (e) => {
    console.log(e.target);
    i++;
  });

  // loop through sequence
    // setup listeners and start timeout
    // if timeout
      // clear listeners
      // play wrong tone and end game
    // if wrong button
      // clear timeout
      // clear listeners
      // play wrong tone and end game
    // else continue
}

function receiveNextPress() {

}

// buttonPress(GREEN, 0, 0.42);
// buttonPress(RED, 0, 0.42);
// buttonPress(RED, 0.47, 0.42);
// buttonPress(YELLOW, 0.94, 0.42);
// buttonPress(BLUE, 1.41, 0.42);

document.addEventListener("DOMContentLoaded", () => {
  // const greenButton = document.querySelector(".green-btn");
  // const redButton = document.querySelector(".red-btn");
  // const yellowButton = document.querySelector(".yellow-btn");
  // const blueButton = document.querySelector(".blue-btn");
  // greenButton.addEventListener("click", (e) => buttonPress(GREEN));
  // redButton.addEventListener("click", (e) => buttonPress(RED));
  // yellowButton.addEventListener("click", (e) => buttonPress(YELLOW));
  // blueButton.addEventListener("click", (e) => buttonPress(BLUE));

  playSequence();
  receiveSequence();
});
