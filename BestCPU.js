function bestMove() {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // Is the spot available?
            let score
            if (board[i][j] == 0) {
                board[i][j] = 1;
                score = minimax(board, false);
                board[i][j] = 0;
                if (score > bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    let t = move.i * 3 + move.j;
    board[move.i][move.j] = 1;
    document.getElementById(t).classList.add('o')
    var k = checkWin()
    printMsg(k)
}




function minimax(board, isMaximizing) {

    let result = checkWin();
    if (result != -1) {
        if (result == 0)
            return 0;
        else if (result == 1) { //! o 
            return 10;
        } else if (result == 2) {
            return -10 //! x
        }
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == 0) {
                    board[i][j] = 1;
                    let score = minimax(board, false);
                    board[i][j] = 0
                        //! max score
                    if (score > bestScore) {
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;

    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == 0) {
                    board[i][j] = 2;
                    let score = minimax(board, true);
                    board[i][j] = 0;
                    //! min score
                    if (score < bestScore) {
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    }
}