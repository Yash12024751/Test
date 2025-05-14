let board = ['', '', '', '', '', '', '', '', ''] 
let currentPlayer = 'X';
let gameActive = true;

const boardElement = document.getElementById('board');
const messageElement = document.getElementById('message');

function renderBoard() {
    boardElement.innerHTML = '';
    board.forEach((ele, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = ele;
        cellElement.addEventListener('click', function() {
            handleCellClick(index)
        });
        boardElement.appendChild(cellElement);
    });
}

function handleCellClick(index) {
    // if (board[index] !== '' || !gameActive) return;
    if (board[index] !== '' || gameActive !== true){
        return;
    }

    board[index] = currentPlayer;
    checkWinner();  
    // currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    if (currentPlayer === 'X')
        currentPlayer = 'O'
    else
        currentPlayer = 'X'
    renderBoard();
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    // for (const ele of winPatterns) {
    //     const [a, b, c] = ele;
    //     console.log(ele)
    //     if (board[a] !=='' && board[a] === board[b] && board[a] === board[c]) {
    //         messageElement.textContent = `${board[a]} Wins!`;
    //         gameActive = false;
    //         return;
    //     }
    // }

    for (let i=0; i<winPatterns.length; i++) {
        const arr = winPatterns[i];
        const a = arr[0]
        const b = arr[1]
        const c = arr[2]

        if (board[a] !== '' && board[a] === board[b] && board[c] === board[a]) {
            messageElement.textContent = `${board[a]} Wins!`
            gameActive = false
        }
    }
    
    if (board.includes('') === false) {
        messageElement.textContent = "It's a Draw!";
        gameActive = false;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    messageElement.textContent = '';
    renderBoard();
}

renderBoard();