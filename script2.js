let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWinner = () => {
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameActive = false;
      return gameState[a];
    }
  }
  if (!gameState.includes('')) {
    gameActive = false;
    return 'Draw';
  }
  return null;
};

const showMessage = (message) => {
  document.getElementById('message').textContent = message;
};

const makeMove = (cellIndex) => {
  if (gameState[cellIndex] || !gameActive) return;
  gameState[cellIndex] = currentPlayer;
  document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
  const winner = checkWinner();
  if (winner) {
    if (winner === 'Draw') {
      showMessage("It's a draw!");
    } else {
      showMessage(`Player ${winner} wins!`);
    }
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    showMessage(`Player ${currentPlayer}'s turn`);
  }
};

const resetGame = () => {
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
  showMessage(`Player ${currentPlayer}'s turn`);
};

showMessage(`Player ${currentPlayer}'s turn`);
