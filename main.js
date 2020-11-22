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
    board[index] = currentTurn;
    console.log(board);
}

init();