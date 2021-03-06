const SHOWING = 'SHOWING_MODE';
const LISTENING = 'LISTENING_MODE';

class Board {
  constructor(buttons) {
    this.buttons = buttons;
  }

  playSequence() {
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

  receiveSequence() {
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
  }

}

export default Board;
