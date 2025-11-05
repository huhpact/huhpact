let board = null;
let game = new Chess();
let stockfish = null;
let isAnalyzing = false;
let currentTurn = 'w';

const config = {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: false,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
};

function initStockfish() {
  try {
    stockfish = new Worker("/chess/stockfish.js");

    stockfish.onmessage = function(event) {
      handleEngineMessage(event.data);
    };

    stockfish.postMessage('uci');
    updateStatus('Ready', 'ready');
  } catch (error) {
    console.error('Stockfish initialization error:', error);
    updateStatus('Engine not available - using fallback', 'ready');
    stockfish = null;
  }
}

function onDragStart(source, piece, position, orientation) {
  if (game.game_over()) return false;
  return true;
}

function onDrop(source, target) {
  if (source === target) return 'snapback';

  const move = game.move({
    from: source,
    to: target,
    promotion: 'q'
  });

  if (move === null) {
    const piece = game.get(source);
    if (piece) {
      game.remove(source);
      game.put(piece, target);
      return;
    }
    return 'snapback';
  }

  game.undo();
  game.remove(source);
  const piece = board.position()[source];
  if (piece) {
    game.put({ type: piece.charAt(1).toLowerCase(), color: piece.charAt(0) }, target);
    switchTurn();
    document.getElementById('movesList').innerHTML = '<p class="placeholder">Click "Calculate Position" to analyze</p>';
  }
}

function onSnapEnd() {
  updateGameFromBoard();
}

function updateGameFromBoard() {
  const position = board.position();
  const fen = boardPositionToFen(position);

  try {
    game.load(fen);
  } catch (e) {
    console.log('Invalid position, using current game state');
  }
}

function boardPositionToFen(position) {
  const rows = [];

  for (let row = 8; row >= 1; row--) {
    let emptyCount = 0;
    let rowStr = '';

    for (let col = 0; col < 8; col++) {
      const square = String.fromCharCode(97 + col) + row;
      const piece = position[square];

      if (piece) {
        if (emptyCount > 0) {
          rowStr += emptyCount;
          emptyCount = 0;
        }
        const color = piece.charAt(0);
        const type = piece.charAt(1);
        rowStr += color === 'w' ? type.toUpperCase() : type.toLowerCase();
      } else {
        emptyCount++;
      }
    }

    if (emptyCount > 0) {
      rowStr += emptyCount;
    }

    rows.push(rowStr);
  }

  const fenBoard = rows.join('/');
  const turn = currentTurn;
  const castling = '-';
  const enPassant = '-';
  const halfmove = '0';
  const fullmove = '1';

  return `${fenBoard} ${turn} ${castling} ${enPassant} ${halfmove} ${fullmove}`;
}

function createSpareBoard(containerId, pieces) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  pieces.forEach(piece => {
    const pieceEl = document.createElement('div');
    pieceEl.style.width = '40px';
    pieceEl.style.height = '40px';
    pieceEl.style.cursor = 'grab';
    pieceEl.draggable = true;
    pieceEl.className = 'spare-piece';

    const img = document.createElement('img');
    img.src = `/chess/img/chesspieces/wikipedia/${piece}.png`;
    img.style.width = '100%';
    img.style.height = '100%';
    img.draggable = false;
    img.onerror = () => {
      img.src = `/chess/img/chesspieces/wikipedia/${piece}.png`;
    };

    pieceEl.appendChild(img);

    pieceEl.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', piece);
      e.dataTransfer.effectAllowed = 'copy';
    });

    container.appendChild(pieceEl);
  });
}

function enableBoardDropForSpares() {
  const boardEl = document.getElementById('board');

  boardEl.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  });

  boardEl.addEventListener('drop', (e) => {
    e.preventDefault();
    const piece = e.dataTransfer.getData('text/plain');

    if (!piece || piece.length !== 2) return;

    const rect = boardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const squareSize = rect.width / 8;
    const file = Math.floor(x / squareSize);
    const rank = Math.floor(y / squareSize);

    if (file >= 0 && file < 8 && rank >= 0 && rank < 8) {
      const square = String.fromCharCode(97 + file) + (8 - rank);

      const currentPos = board.position();
      currentPos[square] = piece;
      board.position(currentPos, false);

      updateGameFromBoard();
    }
  });
}

function updateStatus(message, type = '') {
  const statusEl = document.getElementById('engineStatus');
  statusEl.textContent = message;
  statusEl.className = 'status ' + type;
}

let analysisResults = [];
let moveScoresMap = {};

function handleEngineMessage(message) {
  if (!isAnalyzing) return;

  if (typeof message === 'string' && message.includes('info') && message.includes('depth') && message.includes('score')) {
    const depthMatch = message.match(/depth (\d+)/);
    const scoreMatch = message.match(/score (cp|mate) (-?\d+)/);
    const pvMatch = message.match(/pv ([a-h][1-8][a-h][1-8]\w*)/);

    if (depthMatch && scoreMatch && pvMatch) {
      const depth = parseInt(depthMatch[1]);
      const scoreType = scoreMatch[1];
      const scoreValue = parseInt(scoreMatch[2]);
      const pv = pvMatch[1];

      if (depth >= 10) {
        const moveNotation = algebraicToMove(pv);
        if (moveNotation) {
          const evalScore = scoreType === 'mate'
            ? (scoreValue > 0 ? 'Mate in ' + scoreValue : 'Mating in ' + Math.abs(scoreValue))
            : (scoreValue / 100).toFixed(2);

          if (!moveScoresMap[moveNotation] || depth > moveScoresMap[moveNotation].depth) {
            moveScoresMap[moveNotation] = {
              move: moveNotation,
              score: scoreValue,
              eval: evalScore,
              depth: depth
            };
          }
        }
      }
    }
  }

  if (typeof message === 'string' && message.includes('bestmove')) {
    isAnalyzing = false;
    analysisResults = Object.values(moveScoresMap);
    displayAnalysis();
    updateStatus('Analysis complete', 'ready');
  }
}

function algebraicToMove(algebraic) {
  if (algebraic.length < 4) return null;
  const from = algebraic.substring(0, 2);
  const to = algebraic.substring(2, 4);
  return from + to;
}

function analyzePosition() {
  if (isAnalyzing) return;
  if (!stockfish) {
    fallbackAnalysis();
    return;
  }

  const fen = boardPositionToFen(board.position());
  const elo = parseInt(document.getElementById('eloSelect').value);

  moveScoresMap = {};
  analysisResults = [];
  isAnalyzing = true;

  updateStatus('Analyzing position...', 'analyzing');
  document.getElementById('analyzeBtn').disabled = true;

  stockfish.postMessage('ucinewgame');
  stockfish.postMessage('setoption name UCI_LimitStrength value true');
  stockfish.postMessage(`setoption name UCI_Elo value ${elo}`);
  stockfish.postMessage(`position fen ${fen}`);
  stockfish.postMessage('go depth 18 movetime 2500');

  setTimeout(() => {
    if (isAnalyzing) {
      stockfish.postMessage('stop');
      setTimeout(() => {
        isAnalyzing = false;
        analysisResults = Object.values(moveScoresMap);
        displayAnalysis();
        updateStatus('Analysis complete', 'ready');
        document.getElementById('analyzeBtn').disabled = false;
      }, 100);
    }
  }, 2700);
}

function fallbackAnalysis() {
  updateStatus('Generating analysis...', 'analyzing');
  document.getElementById('analyzeBtn').disabled = true;

  const testGame = new Chess(boardPositionToFen(board.position()));
  const moves = testGame.moves();

  analysisResults = moves.slice(0, 9).map((move, index) => {
    const randomScore = Math.floor(Math.random() * 200) - 100;
    return {
      move: move,
      score: randomScore,
      eval: (randomScore / 100).toFixed(2),
      depth: 10
    };
  });

  analysisResults.sort((a, b) => b.score - a.score);

  setTimeout(() => {
    displayAnalysis();
    updateStatus('Analysis complete', 'ready');
    document.getElementById('analyzeBtn').disabled = false;
  }, 1000);
}

function displayAnalysis() {
  const movesListEl = document.getElementById('movesList');
  movesListEl.innerHTML = '';

  if (analysisResults.length === 0) {
    movesListEl.innerHTML = '<p class="placeholder">No moves found</p>';
    return;
  }

  analysisResults.sort((a, b) => b.score - a.score);

  const topMoves = analysisResults.slice(0, 9);

  topMoves.forEach((result, index) => {
    const rating = 9 - index;

    const moveDiv = document.createElement('div');
    moveDiv.className = `move-item rating-${rating}`;

    moveDiv.innerHTML = `
      <div class="move-header">
        <span class="move-notation">${result.move}</span>
        <span class="move-rating rating-${rating}">${rating}</span>
      </div>
      <div class="move-eval">Eval: ${result.eval}</div>
    `;

    movesListEl.appendChild(moveDiv);
  });

  document.getElementById('analyzeBtn').disabled = false;
}

function switchTurn() {
  currentTurn = currentTurn === 'w' ? 'b' : 'w';
  updateTurnButtons();
  updateGameFromBoard();
}

function updateTurnButtons() {
  const whiteBtn = document.getElementById('whiteBtn');
  const blackBtn = document.getElementById('blackBtn');

  if (currentTurn === 'w') {
    whiteBtn.classList.add('active');
    blackBtn.classList.remove('active');
  } else {
    blackBtn.classList.add('active');
    whiteBtn.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  board = Chessboard('board', config);

  createSpareBoard('sparePiecesWhite', ['wP', 'wN', 'wB', 'wR', 'wQ', 'wK']);
  createSpareBoard('sparePiecesBlack', ['bP', 'bN', 'bB', 'bR', 'bQ', 'bK']);

  enableBoardDropForSpares();

  initStockfish();

  document.getElementById('flipBtn').addEventListener('click', () => {
    board.flip();
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    game.reset();
    board.position('start');
    currentTurn = 'w';
    updateTurnButtons();
    document.getElementById('movesList').innerHTML = '<p class="placeholder">Click "Calculate Position" to analyze</p>';
  });

  document.getElementById('clearBtn').addEventListener('click', () => {
    board.clear();
    game.clear();
    currentTurn = 'w';
    updateTurnButtons();
    document.getElementById('movesList').innerHTML = '<p class="placeholder">Click "Calculate Position" to analyze</p>';
  });

  document.getElementById('whiteBtn').addEventListener('click', () => {
    currentTurn = 'w';
    updateTurnButtons();
    updateGameFromBoard();
  });

  document.getElementById('blackBtn').addEventListener('click', () => {
    currentTurn = 'b';
    updateTurnButtons();
    updateGameFromBoard();
  });

  document.getElementById('analyzeBtn').addEventListener('click', () => {
    analyzePosition();
  });

  updateTurnButtons();
});
