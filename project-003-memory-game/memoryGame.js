let mainContainer = document.querySelector("main");
let gameContainer = document.querySelector(".game-container");
let tiles = gameContainer.querySelectorAll(".tile");
let tileStatus;
let firstClickedTile;
let secondClickedTile;
let firstClickedTileAttributeName;
let secondClickedTileAttributeName;
let startGameButton = document.querySelector("#startGameButton");

function addClickedClass(e) {
  let actualTile = e.target.closest(".tile");
  actualTile.classList.toggle('clicked');
}

function updateTileStatus() {
  if (!tileStatus) {
    tileStatus = true;
  } else {
    tileStatus = false;
  }
}

function removeClickedClasses() {
  firstClickedTile.classList.remove("clicked");
  secondClickedTile.classList.remove("clicked");
}

function addMatchedClasses() {
  firstClickedTile.classList.add("matched");
  secondClickedTile.classList.add("matched");
}

function checkForMatches(e) {
  if (tileStatus) {
    firstClickedTile = e.target.closest(".tile");
    firstClickedTileAttributeName = firstClickedTile.getAttribute("data-name");
  } else {
    secondClickedTile = e.target.closest(".tile");
    secondClickedTileAttributeName = secondClickedTile.getAttribute("data-name");
  }

  if (!secondClickedTile) return;
  gameContainer.removeEventListener("click", handleClick);

  if (firstClickedTileAttributeName == secondClickedTileAttributeName) {
    setTimeout(() => {
      addMatchedClasses();
      firstClickedTile = "";
      secondClickedTile = "";
      gameContainer.addEventListener("click", handleClick);
      checkEndOfGame();
    }, 300);
  } else {
    setTimeout(() => {
      removeClickedClasses();
      secondClickedTile = "";
      gameContainer.addEventListener("click", handleClick);
    }, 500);
  }
}

function shuffleTilesInDOM() {
  const tilesArr = Array.from(gameContainer.querySelectorAll(".tile"));

  for (let i = tilesArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tilesArr[i], tilesArr[j]] = [tilesArr[j], tilesArr[i]];
  }
  gameContainer.append(...tilesArr);
}

function checkEndOfGame() {
  let endOfGame = true;

  for (let i = 0; i < tiles.length; i++) {
    if (!tiles[i].classList.contains('matched')) {
      endOfGame = false;
      break;
    }
  }

  if (endOfGame) {
    mainContainer.classList.add("finished");
  }
}

function handleClick(e) {
  addClickedClass(e);
  updateTileStatus();
  checkForMatches(e);
}

function removeClasses() {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove('matched');
    tiles[i].classList.remove('clicked');
  }
}

function startNewGame() {
  mainContainer.classList.remove("finished");
  removeClasses();
  shuffleTilesInDOM();
}

shuffleTilesInDOM();
gameContainer.addEventListener("click", handleClick);
startGameButton.addEventListener("click", startNewGame);