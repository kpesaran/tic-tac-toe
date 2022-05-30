const board = document.querySelector('.board');
const cells = board.querySelectorAll('.cell');

const restartButton = document.getElementById('restart');

class Player {
  constructor(role) {
    this.role = role;
  }

  move() {
    // todo: return [x, y]
    // hint: get imput from event listener
  }
}

class GameState {
  constructor() {
    this.restart();
  }

  restart() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.player1 = new Player('x');
    this.player2 = new Player('o');
  }

  play() {
    let currPlayer = this.player1;
    let prevPlayer = this.player2;

    while (!this.checkWinner()) {
      let currMove = currPlayer.move();
      let x = currMove[0],
        y = currMove[1];

      // todo: check if currMove is valid

      this.board[y][x] = currPlayer.role;

      this.updateDOM();

      let tmpPlayer = currPlayer;
      currPlayer = prevPlayer;
      prevPlayer = tmpPlayer;
    }
  }

  updateDOM() {
    for (y = 0; y < 3; ++y) {
      for (x = 0; x < 3; ++x) {
        let cellsIdx = y * 3 + x;

        cells[cellsIdx].classList.remove('x');
        cells[cellsIdx].classList.remove('circle');

        if (this.board[y][x] != '')
          cells[cellsIdx].classList.add(this.board[y][x]);
      }
    }
  }

  validateMove(x, y) {
    // todo
    // return true if a move is valid
  }

  // todo: give this function a better name
  isValidWinningState(cells) {
    // len(cells) = 3
    return cells[0] != '' && cells[0] === cells[1] && cells[1] === cells[2];
  }

  checkWinner() {
    // todo: check draw

    for (y = 0; y < 3; ++y)
      if (this.isValidWinningState(this.board[y])) return this.board[y][0];

    for (x = 0; x < 3; ++x) {
      if (
        this.isValidWinningState([
          this.board[0][x],
          this.board[1][x],
          this.board[2][x]
        ])
      ) {
        return this.board[0][x];
      }
    }

    if (
      this.isValidWinningState(
        this.board[0][0],
        this.board[1][1],
        this.board[2][2]
      )
    ) {
      return this.board[0][0];
    }

    if (
      this.isValidWinningState(
        this.board[0][2],
        this.board[1][1],
        this.board[2][0]
      )
    ) {
      return this.board[0][2];
    }
  }
}

/* ---------- old code ----------

const board = document.querySelector('.board');
const cells = board.querySelectorAll('.cell');

const restartButton = document.getElementById('restart');

let circleTurn = false;

cells.forEach(cell => {
  cell.addEventListener('click', e => {
    const clickedCell = e.currentTarget;

    if (
      clickedCell.classList.contains('circle') ||
      clickedCell.classList.contains('x')
    ) {
      console.log("nothing should happened still x's turn");
      return;
    }

    clickedCell.classList.add(circleTurn ? 'circle' : 'x');

    circleTurn = !circleTurn;
  });
});

restartButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.classList.remove('x');
    cell.classList.remove('circle');
  });
});
*/
