const X = 'x'
const O = 'o'
let circleT

const cellElements = document.querySelectorAll('[data-cell]')
const win_message_text = document.querySelector('[win-msg-txt]')
const win_message = document.getElementById('win-msg')
const vsPlayer = document.getElementById('playerbutton')
const vsCPU2 = document.getElementById('computerbutton2')
const vsCPU1 = document.getElementById('computerbutton1')

var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
var flag = -1

startGame2()


vsCPU2.addEventListener('click', startGame_2)
vsCPU1.addEventListener('click', startGame_1)

vsPlayer.addEventListener('click', startGame2)


//! Cpu Game Hard
function startGame_2() {
    flag = 1
    win_message_text.innerText = ``;
    win_message.classList.remove('show')
    cellElements.forEach(cell => {
        cell.classList.remove(X)
        cell.classList.remove(O)
        cell.addEventListener("click", handleClick, { once: true })
    })
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    circleT = 0
    return;
}

//! Cpu Game Easy
function startGame_1() {
    flag = 0
    win_message_text.innerText = ``;
    win_message.classList.remove('show')
    cellElements.forEach(cell => {
        cell.classList.remove(X)
        cell.classList.remove(O)
        cell.addEventListener("click", handleClick, { once: true })
    })
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    circleT = 0
    return;
}

//! 2 Player Game
function startGame2() {
    flag = 2
    win_message_text.innerText = ``;
    win_message.classList.remove('show')
    cellElements.forEach(cell => {
        cell.classList.remove(X)
        cell.classList.remove(O)
        cell.addEventListener("click", handleClick, { once: true })
    })
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    circleT = 0
    return;
}

function handleClick(e) {
    const cell = e.target
    const current = circleT ? O : X

    let t = this.id
    let x = Math.floor(t / 3);
    let y = t % 3;

    // If board is empty ,then only we can click on it
    if (board[x][y] == 0) {
        if (current == 'o') {
            board[x][y] = 1;
        } else if (current == 'x') {
            board[x][y] = 2;
        }

        placeMark(cell, current)
        var k = checkWin()
        printMsg(k)
        if (k == -1) {
            if (flag == 1)
                bestMove()
            else if (flag == 2) {
                swapTurn()
            } else {
                level1()
            }
        }

    }
}

function printMsg(k) {
    let flag = 0
    if (k == 1) {
        flag = 1
        win_message_text.innerText = 'Player O Wins!!!'
        win_message.classList.add('show')
    } else if (k == 2) {
        flag = 1
        win_message_text.innerText = 'Player X Wins!!!'
        win_message.classList.add('show')
    } else if (k == 0) {
        flag = 1
        win_message_text.innerText = 'Tie !!!'
        win_message.classList.add('show')
    }
    if (flag == 1) {
        cellElements.forEach(cell => {
            cell.removeEventListener('click', handleClick)
        })
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

function checkWin() {

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

    if (winner == -1) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == 0) {
                    return winner;
                }
            }
        }
        return 0;
    } else {
        return winner;
    }
}