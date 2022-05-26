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
