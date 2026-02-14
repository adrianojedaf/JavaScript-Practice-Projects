let gameContainer = document.querySelector(".game-container");
let card = gameContainer.querySelectorAll(".tile");

function handleClick(e) {
  let selectedTile = e.target.closest(".tile");
  selectedTile.classList.toggle('clicked');
}

gameContainer.addEventListener("click", handleClick);