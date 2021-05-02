const X = 'x'
const O = 'o'
const cellElements = document.querySelectorAll('[data-cell]')

let circleT
startGame()

function startGame() {
    cellElements.forEach(cell => {
        cell.addEventListener("click", handleClick, { once: true })
    })

}

var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

var available = 9


function handleClick(e) {
    const cell = e.target
    const current = circleT ? O : X

    let t = this.id
    let x = Math.floor(t / 3);
    let y = t % 3;
    if (current == 'o') {
        board[x][y] = 1;
    } else if (current == 'x') {
        board[x][y] = 2;
    }
    available = available - 1

    placeMark(cell, current)
    swapTurn()
    var k = checkWin(current)

    if (k == 1) {
        console.log("O wins")
    } else if (k == 2) {
        console.log("X wins")
    } else if (k == 0) {
        console.log("tie")
    } else {

    }

}

function placeMark(cell, current) {
    cell.classList.add(current)
}

function swapTurn() {
    circleT = !circleT
}

function equals3(a, b, c) {
    return a == b && b == c && a != 0;
}

function checkWin(current) {

    let winner = -1;
    // horizontal
    for (let i = 0; i < 3; i++) {
        if (equals3(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
        }
    }
    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equals3(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
        }
    }
    // Diagonal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
        winner = board[2][0];
    }

    if (winner == -1 && available == 0) {
        return 0;
    } else {
        return winner;
    }
}