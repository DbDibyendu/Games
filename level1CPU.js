function level1() {

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // Is the spot available?
            if (board[i][j] == 0) {
                board[i][j] = 1;
                let t = i * 3 + j;
                current = 'o'
                document.getElementById(t).classList.add(current)
                var k = checkWin(current)
                printMsg(k)
                return;
            }
        }
    }
}