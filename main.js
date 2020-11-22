/*----- constants -----*/


/*----- app's state (variables) -----*/
let board;
let currentTurn = 'X';
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll("div.square"));
/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", makeTurn);
/*----- functions -----*/
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
        ];

    render();
}

function render() {
    function setMark(mark, index) {
        console.log(mark, index);
        squares[index].textContent = mark; //sets mark at position in game to position in board var
    }
    board.forEach(setMark);
}

function makeTurn(event) {
    function getClickedSquare(square) {
        if(square === event.target) {
            return square;
        }
    }
    let index = squares.findIndex(getClickedSquare);
    if(event.target.innerHTML === "") { //square has not been clicked yet
        board[index] = currentTurn;
        event.target.innerHTML = currentTurn;
        currentTurn === 'X' ? currentTurn = 'O' : currentTurn = 'X';
    }
    console.log(board);
}

init();