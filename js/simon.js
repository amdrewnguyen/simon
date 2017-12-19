class Simon {
  constructor() {
    this.sequence = [];
  }

  nextTurn() {
    let i = Math.floor(Math.random() * 4);
    this.sequence.unshift(COLORS[i]);
    playSequence();
  }
}

export default Simon;

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

  let i = 0;

  const buttonContainer = document.querySelector(".button-container");
  buttonContainer.addEventListener("click", (e) => {
    if (buttons[sequence[i].btnSelector] === e.target) {
      console.log("thats the button!");
      let button = buttons[sequence[i].btnSelector];
      button.classList.add("pressed");
      buttonPress(sequence[i], dur);
      i++;
    } else {
      playWrong(dur);
      console.log("thats NOT the button!");
    }
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
