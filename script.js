const X = 'x'
const O = 'o'
const cellElements = document.querySelectorAll('[data-cell]')
let circleT

const win_message_text = document.querySelector('[win-msg-txt]')
const win_message = document.getElementById('win-msg')
const restart = document.getElementById('rbutton')
var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

var available = 9

startGame()

restart.addEventListener('click', startGame)

function startGame() {
    win_message.classList.remove('show')
    cellElements.forEach(cell => {
        cell.classList.remove(X)
        cell.classList.remove(O)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener("click", handleClick, { once: true })
    })
    available = 9
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
}




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

    var k = checkWin(current)
    if (k == 1) {
        win_message_text.innerText = 'Player O \n Wins!!!'
        win_message.classList.add('show')
        console.log("O wins")
        startGame()

    } else if (k == 2) {
        win_message_text.innerText = 'Player X \n Wins!!!'
        win_message.classList.add('show')
        startGame()
    } else if (k == 0) {
        win_message_text.innerText = 'Tie !!!'
        win_message.classList.add('show')
        startGame()
    }
    swapTurn()
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