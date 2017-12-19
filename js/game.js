import Board from './board.js';

class Game {
  constructor(buttons) {
    this.board = new Board(buttons);
  }
}

export default Game;
