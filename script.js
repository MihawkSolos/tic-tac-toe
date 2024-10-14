function GameBoard () {
    
    const players = {
        player1: 'X',
        player2: 'O',
    };

    let gameBoard = {
        r1c1: '',
        r1c2: '',
        r1c3: '',
        r2c2: '',
        r2c2: '', 
        r2c3: '',
        r3c1: '',
        r3c2: '',
        r3c3: '',
    };

    const winningCombinations = [
        ['r1c1', 'r1c2', 'r1c3'], // Row 1
        ['r2c1', 'r2c2', 'r2c3'], // Row 2
        ['r3c1', 'r3c2', 'r3c3'], // Row 3
        ['r1c1', 'r2c1', 'r3c1'], // Column 1
        ['r1c2', 'r2c2', 'r3c2'], // Column 2
        ['r1c3', 'r2c3', 'r3c3'], // Column 3
        ['r1c1', 'r2c2', 'r3c3'], // Diagonal
        ['r1c3', 'r2c2', 'r3c1'], // Other diagonal
    ];

    function checkWin(marker) {
        return winningCombinations.some(combination => {
            return combination.every(cell => gameBoard[cell] === marker);
        });
    }

    function placeMarker(row, col, marker) {
        const cell = `r${row}c${col}`;
        if (gameBoard[cell] === '') {
            gameBoard[cell] = marker;
            return true; // Move was successful
        }
        return false; // Spot is already taken
    }

    function reset() {
        Object.keys(gameBoard).forEach(key => {
            gameBoard[key] = '';
        });
    }

    return {
        players,
        gameBoard,
        placeMarker,
        checkWin,
        reset,
    };
}

const game = GameBoard();
