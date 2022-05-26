//Gameboard to keep tract of moves, once either player x or circle gets their symbols in three cells in a row they win.
const gameboard = [
    '', '', '',
    '', '', '',
    '', '', ''
]

const gameboardObject = (newMark) => {
   
    if (circleTurn)
        gameboard[newMark] = 'circle'
    else if (!circleTurn)
        gameboard[newMark] = 'x'
    return {gameboard}
}
let board = document.querySelector('.board')

let cell = board.querySelectorAll('.cell')

const circleTurn = false

for (i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        placeMark_swicthTurn()
        return console.log('one of 9 cells should of been clicked')

    })
};

function playGame() {
    console.log('game started');
    cell.addEventListener('click', () => {
        console.log('cell got clicked')
    });
}

//placeMark depending on whose turn it is will place mark and then switch turns 
clickedCell = document.querySelector('.cell')
clickedCell.addEventListener(
    'click',
    placeMark_swicthTurn(),
    gameboardObject())


function placeMark_swicthTurn() {
    
        if (!circleTurn) {
            console.log('it is x turn this should mark x in the spot unless circle or x already there')
            
            if (clickedCell.classList.contains('circle')
                ||
                clickedCell.classList.contains('x')){
                return console.log('nothing should happened still x\'s turn')
            }
            else {
                clickedCell.classList.add('x')

                circleTurn = true
            }
        }
        else if (circleTurn) {
            console.log('it is \'circles\' turn currently, a circle should mark in the cell clicked unless already x or o')  
            if (clickedCell.classList.contains('circle') || clickedCell.classList.contains('x')) {
                return console.log('nothing should happened still o\'s turn')
            }
            else {
                clickedCell.classList.add('circle')
                circleTurn = false
            }
        }
    }
;
 


function restartGame() {

    //reset the gameboard of array again as empty string for all nine elements 
    for (i = 0; i < gameboardObject.length; i++) {
        
        gameboard[i] = ''
    }
    //adjust html to remove x and circle classes to remove marks     
    if (cell.classList.contains('x')) {
         cell.classList.remove('x')
        }
    if (cell.classList.contains('circle')){
         cell.classList.remove('circle')
    }
};

let restartButton = document.getElementById('restart')
restartButton.addEventListener('click', () => restartGame())





