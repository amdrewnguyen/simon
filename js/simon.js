import { COLORS } from './util.js';

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



// buttonPress(GREEN, 0, 0.42);
// buttonPress(RED, 0, 0.42);
// buttonPress(RED, 0.47, 0.42);
// buttonPress(YELLOW, 0.94, 0.42);
// buttonPress(BLUE, 1.41, 0.42);
