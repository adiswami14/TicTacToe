let board;
let currentTurn = 'X';
let winner;
const squares = Array.from(document.querySelectorAll("div.square"));
const topMessage = document.querySelector('h2');
document.getElementById("board").addEventListener("click", makeTurn);
function init() {
    topMessage.textContent = "Start the game up!";
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
        winner = checkWin(currentTurn);
        currentTurn === 'X' ? currentTurn = 'O' : currentTurn = 'X';
        if(winner === '') {
            topMessage.textContent = `It is ${currentTurn}'s turn!`
        } else topMessage.textContent = `${winner} won!`
    }
}

function checkWin(currChar) {
    if(checkWinByRows(currChar) || checkWinByColumns(currChar) || checkWinByDiagonals(currChar)) {
        return currChar;
    }
    return '';
}

function checkWinByRows(currChar) {
    if(currChar === board[0] && currChar === board[1] && currChar === board[2]) { //row one
        return true;
    } else if(currChar === board[3] && currChar === board[4] && currChar === board[5]) { //middle row
        return true;
    } else if(currChar === board[6] && currChar === board[7] && currChar === board[8]) { //last row
        return true;
    }
    return false;
}

function checkWinByColumns(currChar) {
    if(currChar === board[0] && currChar === board[3] && currChar === board[6]) { //column one
        return true;
    } else if(currChar === board[1] && currChar === board[4] && currChar === board[7]) { //middle column
        return true;
    } else if(currChar === board[2] && currChar === board[5] && currChar === board[8]) { //last column
        return true;
    }
    return false;
}

function checkWinByDiagonals(currChar) {
    if(currChar === board[0] && currChar === board[4] && currChar === board[8]) { //diagonal
        return true;
    } else if(currChar === board[2] && currChar === board[4] && currChar === board[6]) { //anti-diagonal
        return true;
    } 
    return false;
}

init();